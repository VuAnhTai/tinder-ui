import type { NextPage } from 'next'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <Header backButton='/'/>
      <h1>Chat</h1>
    </div>
  )
}

export default Home
