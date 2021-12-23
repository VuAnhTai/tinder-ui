import { useRouter } from 'next/router'
import React from 'react'
import CardMini from '../CardMini'
import styles from './style.module.scss'
interface propsUserCards {
  users: any[],
}


function UserCards({users}:propsUserCards) {
  const router = useRouter()
  const handleClick = ( user:any) => (e:React.SyntheticEvent) => {
    e.preventDefault()
    router.push(`/chat/${user.name}`)
  }

  return (
    <div className={styles.row}>
      {
        users.map((user:any, index:number) => (
          <div className={styles.col} key={index} onClick={handleClick(user)}>
              <CardMini user={user} />
          </div>
        ))
      }
    </div>
  )
}

export default UserCards
