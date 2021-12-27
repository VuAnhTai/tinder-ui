import type { NextPage } from 'next'
import Header from '../src/components/Header'
import SideBar from '../src/containers/SideBar'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.contentLeft}>
        <Header />
        <SideBar></SideBar>
      </div>
      <div className={styles.contentRight}>
        <h1>Chat</h1>
      </div>
    </div>
  )
}

export default Home
