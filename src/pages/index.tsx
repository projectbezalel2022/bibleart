import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import {ViewCard} from "../components/view-card";
import {Header} from "../components/header";
import {bookData} from "../bookData";
import BookLink from '../components/book-link';

const Home: NextPage = ({bookData}: any) => {
    console.log(bookData)

  return (
    <div className={styles.container}>
        <div className={styles.insideContainer}>
        <Header bookName={'Genesis 1'}/>
            {bookData.map(({verses, image}: any, i: any) => {
                return (
                    <ViewCard key={i} verses={verses} image={image} chapter={String(i+1)}/>
                )
            })}
        </div>
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
