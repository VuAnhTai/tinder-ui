import React from 'react'
import styles from "./style.module.scss";

interface propsCardMini {
  user: any;
}

function CardMini({user}: propsCardMini) {
  return (
    <>
      <div
        style={{backgroundImage: `url(${user.url})`}}
        className={styles.card}
      >
        <h3>{ user.name }</h3>
      </div>
    </>
  )
}

export default CardMini

