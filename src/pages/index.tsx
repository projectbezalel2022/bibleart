import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Header} from "../components/header";
import {bookData} from "../bookData";
import {ViewCard} from "../components/view-card";

const Home: NextPage = ({bookData}: any) => {
    console.log(bookData)

  return (
    <div className={styles.container}>
        <Header bookName={'Genesis 1'}/>
            {bookData.map(({verses, image}: any, i: any) => {
                return (
                    <ViewCard key={i} verses={verses} image={image} chapter={String(i+1)}/>
                )
            })}
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
