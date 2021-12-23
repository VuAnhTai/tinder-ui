import React from 'react'
import styles from './style.module.scss'
interface propsUserMessage {
  userMessage: any,
}


function UserMessage({userMessage}:propsUserMessage) {
  return (
    <div className={styles.box}>
      <img src={userMessage.url}></img>
      <div className={styles.content}>
        <h3>{userMessage.name}</h3>
        <p>{userMessage.message}</p>
      </div>
    </div>
  )
}

export default UserMessage
