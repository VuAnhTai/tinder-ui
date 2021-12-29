import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image';
interface propsUserMessage {
  userMessage: any,
}


function UserMessage({userMessage}:propsUserMessage) {
  return (
    <div className={styles.box}>
      <Image src={userMessage.url} alt="chat"></Image>
      <div className={styles.content}>
        <h3>{userMessage.name}</h3>
        <p>{userMessage.message}</p>
      </div>
    </div>
  )
}

export default UserMessage
