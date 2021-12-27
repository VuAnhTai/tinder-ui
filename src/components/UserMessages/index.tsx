import { useRouter } from 'next/router'
import React from 'react'
import UserMessage from '../UserMessage'
import styles from './style.module.scss'
interface propsUserMessages {
  userMessages: any[],
}


function UserMessages({userMessages}:propsUserMessages) {
  const router = useRouter()
  const handleClick = ( user:any) => (e:React.SyntheticEvent) => {
    e.preventDefault()
    router.push({
      pathname: '/chat',
      query: { user_uuid: user.uuid }
    })
  }

  return (
    <>
      {
        userMessages.map((userMessage:any, index:number) => (
          <div key={index} onClick={handleClick(userMessage)}>
            <UserMessage userMessage={userMessage} key={index}/>
          </div>
        ))
      }
    </>
  )
}

export default UserMessages
