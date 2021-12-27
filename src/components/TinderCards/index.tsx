import React, { useEffect, useState, useMemo, useRef, forwardRef, useImperativeHandle } from 'react'
import styles from "./style.module.scss";
import TinderCard from 'react-tinder-card'
import { userLike, userPass } from '../../api/user'

import Dialog from '@mui/material/Dialog';
interface propsInterface {
  users: any[],
  actions: any[],
  fetchDataAgain: any,
}

function TinderCards({ users, actions, fetchDataAgain }: propsInterface, ref:any) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [open, setOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(users[0]);
  useEffect(() => {
    setCurrentIndex(users.length - 1)
    setCurrentUser(users[0])
  }, [users])

  const currentIndexRef = useRef(currentIndex)
  const canSwipe = currentIndex >= 0

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map(() => React.createRef()),
    [users]
  ) as any

  const updateCurrentIndex = (val:any) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const liked = async (data:any) => {
    const action = actions.find(action => action.user_uuid === data.user_action_uuid)
    if (action) {
      handleOpen()
    }

    await userLike(data)
    fetchDataAgain()
  }
  const pass = async (data:any) => {
    userPass(data)
  }
  // set last direction and decrease current index
  const swiped = (direction:any, user:any, index:any) => {
    updateCurrentIndex(index - 1)
    setCurrentUser(user)

    const dataSend = {
      user_uuid: '',
      user_action_uuid: user.uuid
    };
    if (direction === 'right') {
      liked(dataSend)
    }

    if (direction === 'left') {
      pass(dataSend)
    }
  }

  const outOfFrame = (name: string) => {
    console.log(name);
  }

  const swipe = async (dir:any) => {
    if (canSwipe && currentIndex < users.length) {
      // console.log(childRefs[currentIndex].current.swipe(dir))
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
                onSwipe={(dir: any) => swiped(dir, user, index)}
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
        <SimpleDialog
          open={open}
          onClose={handleClose}
          user={currentUser || {}}
          className={styles.dialog}
        />
    </div>
  )
}

function SimpleDialog(props:any) {
  const { onClose, open, user } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} className={styles.dialog}>
      <div
        style={{backgroundImage: `url(${user.url})`}}
        className={styles.card}
      >
        <h3>{ user.name }</h3>
      </div>
    </Dialog>
  );
}


export default forwardRef(TinderCards)
