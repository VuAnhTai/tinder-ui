import type { NextPage } from 'next'
import Header from '../../src/components/Header'
import SideBar from '../../src/containers/SideBar'
import ChatScreen from '../../src/components/ChatScreen'
import styles from '../../styles/Home.module.css'
import Profile from '../../src/components/Profile'
const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.contentLeft}>
        <Header />
        <SideBar></SideBar>
      </div>
      <div className={styles.contentMid}>
        <ChatScreen></ChatScreen>
      </div>
      <div className={styles.contentRight} style={{width: '25%'}}>
        <Profile></Profile>
      </div>
    </div>
  )
}

export default Home
