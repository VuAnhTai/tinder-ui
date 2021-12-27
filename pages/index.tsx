import type { NextPage } from 'next'
import { useRef } from 'react'

import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import BodyTinder from '../src/containers/BodyTinder'
import SideBar from '../src/containers/SideBar'
const Home: NextPage = () => {
  const childRef = useRef() as any;
  const fetchDataAgain = () => {
    childRef.current.fetchData()
  }

  return (
    <div className={styles.app}>
      <div className={styles.contentLeft}>
        <Header />
        <SideBar ref={childRef} ></SideBar>
      </div>
      <div className={styles.contentRight}>
        <BodyTinder fetchDataAgain={fetchDataAgain}></BodyTinder>
      </div>
    </div>
  )
}

export default Home
