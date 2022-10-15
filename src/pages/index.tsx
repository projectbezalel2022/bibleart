import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Header} from "../components/header";
import {bookData} from "../bookData";

const Home: NextPage = ({bookData}: any) => {
    console.log(bookData)

  return (
    <div className={styles.container}>
        <Header bookName={'Genesis 1'}/>
        {/*<Image src={'/images/tumblr_oj6cljvYni1ubfd0zo1_1280.jpeg'} width={350} height={350}/>*/}
    </div>
  )
}

export const getStaticProps =  () => {
    return {
        props: {
            bookData
        }
    }
}

export default Home
