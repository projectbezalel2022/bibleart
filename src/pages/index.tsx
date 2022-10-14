import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}></div>
      Noah’s ark finally rested after floods.
        <Image src={'/images/tumblr_oj6cljvYni1ubfd0zo1_1280.jpeg'} width={350} height={350}/>
    </div>
  )
}

export default Home
