import React, { useState, useEffect } from 'react'
import styles from "./style.module.scss";
import TinderCard from 'react-tinder-card'
import { firestore } from "../firebase";
import {collection, getDocs} from "@firebase/firestore";

function TinderCards() {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }

  const [users, setPeople] = useState([] as any)

  useEffect(() => {
    async function fetchData() {
      const userCollection = collection(firestore,'user');
      const snapshot = await getDocs(userCollection);
      const data = snapshot.docs.map(doc => doc.data())
      setPeople(data)
    }

    return () => {
      fetchData()
    }
  }, [])

  const swiped = (direction: string, nameToDelete: string) => {
    console.log("removing" + direction + nameToDelete);
  }

  const outOfFrame = (name: string) => {
    console.log(name);
  }

  return (
    <div className={styles.tinderCard}>
      <div className={styles.tinderCard__container}>
      {
        users.map((user, index) => (
          <TinderCard
            className={styles.swipe}
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir: any) => swiped(dir, user.name)}
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

export default TinderCards
