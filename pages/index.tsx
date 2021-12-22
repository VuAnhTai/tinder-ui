import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import TinderCards from '../src/components/TinderCards'
import SwipeButtons from '../src/components/SwipeButtons'
const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <Header />
      <TinderCards></TinderCards>
      <SwipeButtons></SwipeButtons>
    </div>
  )
}

export default Home
