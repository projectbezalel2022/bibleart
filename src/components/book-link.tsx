import Link from "next/link";
import { ChangeEvent, useState } from "react";
import ChapterLink from "./chapter-link";
import styles from '../styles/chapter-list.module.css';

type propsType = {
    key?: Number
    book: String
    chapters: number
}

// for now, the book is always Genesis

export default function BookLink({book, chapters}: propsType) {

    let fullChaptersArray: number[] = [];
    for (let i=0; i<chapters; i++) {
        fullChaptersArray.push(i+1);
    }
    const chaptersShown = fullChaptersArray;

    return (
        <section className={styles.listGrid}>
            {chaptersShown.map((chapter, index) => {
                let linkRef = '/books/'+book+'/'+String(chapter);
                //console.log(linkRef);
                return (<ChapterLink key={index} linkRef={linkRef} chapter={chapter}/>)
            })}
        </section>
      )
}

//console.log(chaptersArray)
    /*function onBookClick (e: ChangeEvent<HTMLElement>) {
        // What is revealed shall be hidden, and what is hidden shall now be revealed!
        if (bookIsSelected === 'visible') {
            setBookIsSelected('hidden');
            setChaptersShown([]);
            console.log(chaptersShown);
        } else {
            console.log('hidden');
            setBookIsSelected('visible');
            setChaptersShown(fullChaptersArray);
        }

        console.log('Book selected');
    }*/
