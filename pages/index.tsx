import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TinderCards from '../src/components/TinderCards'
import SwipeButtons from '../src/components/SwipeButtons'
const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <TinderCards></TinderCards>
      <SwipeButtons></SwipeButtons>
    </div>
  )
}

export default Home
