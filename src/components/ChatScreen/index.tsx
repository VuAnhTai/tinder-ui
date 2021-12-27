import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import styles from "./style.module.scss";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: 'Tai',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
      message: 'Whats up <3',
    },
    {
      name: 'Tai',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
      message: 'Hows it going',
    },
    {
      message: 'Hi! How are you Ellen!',
    }
  ])
  return (
    <div className={styles.chatScreen}>
      <h1 className={styles.title}>You matched with Tai</h1>
      {
        messages.map((message, index) => (
          message.name ? (
            <div className={styles.message} key={index}>
              <Avatar alt={message.message} src={message.image} className={styles.avatar}></Avatar>
              <p className={styles.text}>{message.message}</p>
            </div>
          ) : (
            <div className={styles.message} key={index}>
              <p className={styles.textUser}>{message.message}</p>
            </div>
          )
          
        ))
      }

      <div>
        <form className={styles.input}>
          <input className={styles.inputField} placeholder="Type a message"></input>
          <button className={styles.inputButton}>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen
