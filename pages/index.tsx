import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import BodyTinder from '../src/containers/BodyTinder'
import SideBar from '../src/containers/SideBar'
const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.contentLeft}>
        <Header />
        <SideBar></SideBar>
      </div>
      <div className={styles.contentRight}>
        <BodyTinder></BodyTinder>
      </div>
    </div>
  )
}

export default Home
