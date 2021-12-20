import { SwipeDown } from '@mui/icons-material';
import React, { useState } from 'react'
import styles from "./style.module.scss";
import TinderCard from 'react-tinder-card'

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon musk',
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg'
    }
  ])

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
        people.map((person, index) => (
          <TinderCard
            className={styles.swipe}
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir: any) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{backgroundImage: `url(${person.url})`}}
              className={styles.card}
            >
              <h3>{ person.name }</h3>
            </div>
          </TinderCard>
        ))
      }
      </div>
    </div>
  )
}

export default TinderCards
