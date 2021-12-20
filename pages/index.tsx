import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import TinderCards from '../components/TinderCards'
const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      {/* Header */}
      <Header></Header>
      <TinderCards></TinderCards>
      {/* Tinder Card */}
      {/* Footer */}
    </div>
  )
}

export default Home
