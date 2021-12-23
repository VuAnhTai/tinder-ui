import React, { useEffect, useState, useMemo, useRef, forwardRef, useImperativeHandle } from 'react'
import styles from "./style.module.scss";
import TinderCard from 'react-tinder-card'

interface propsInterface {
  users: any[],
}

function TinderCards({ users }: propsInterface, ref:any) {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    setCurrentIndex(users.length - 1)
  }, [users])

  const currentIndexRef = useRef(currentIndex)
  const canSwipe = currentIndex >= 0

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    [users]
  ) as any

  const updateCurrentIndex = (val:any) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  // set last direction and decrease current index
  const swiped = (direction:any, nameToDelete:any, index:any) => {
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name: string) => {
    console.log(name);
  }

  const swipe = async (dir:any) => {
    if (canSwipe && currentIndex < users.length) {
      console.log(childRefs[currentIndex].current.swipe(dir))
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }
  useImperativeHandle(ref, () => ({
    swipe
  }))

  return (
    <div className={styles.tinderCard}>
      <div className={styles.tinderCard__container}>
      {
        users.map((user:any, index:number) => (
          <TinderCard
            ref={childRefs[index]}
            className={styles.swipe}
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir: any) => swiped(dir, user.name, index)}
            onCardLeftScreen={() => outOfFrame(user.name)}
          >
            <div
              style={{backgroundImage: `url(${user.url})`}}
              className={styles.card}
            >
              <h3>{ user.name }</h3>
            </div>
          </TinderCard>
        ))
      }
      </div>
    </div>
  )
}

export default forwardRef(TinderCards)
