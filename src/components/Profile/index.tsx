import React, { useState, useEffect } from 'react'
import { getUser } from '../../api/user'
import { useRouter } from 'next/router'
import styles from "./style.module.scss";
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Profile() {
  const [user, setUser] = useState({
    name: 'Tai',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    birthday: '2021-11-20',
  },)
  const router = useRouter()
  const { user_uuid } = router.query as {
    user_uuid: string
  }
  useEffect(() => {
    fetchData(user_uuid)
  }, [user_uuid])

  const fetchData = async (user_uuid:string) => {
    const { data } : any = await getUser(user_uuid)
    setUser(data || {})
  }

  return (
    <>
      <div
        style={{backgroundImage: `url(${user.url})`}}
        className={styles.card}
      >
      </div>
      <div className={styles.info}>
        <h1>{ user.name }</h1>
        <p><CakeIcon></CakeIcon> { user.birthday }</p>
        <p><LocationOnIcon></LocationOnIcon> 3 kilometers away</p>
      </div>
      <div className={styles.link}>
        <p>https://www.facebook.com/</p>
      </div>
    </>
  )
}

export default Profile

