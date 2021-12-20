import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      {/* Header */}
      <Header></Header>
      {/* Tinder Card */}
      {/* Footer */}
    </div>
  )
}

export default Home
