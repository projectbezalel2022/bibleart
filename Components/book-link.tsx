import Link from "next/link";
import { ChangeEvent, useState } from "react";

type propsType = {
    key: Number
    book: String
    chapters: Number
}

export default function BookLink({book, chapters}: propsType) {
    const [bookIsSelected, setBookIsSelected] = useState<'hidden'|'visible'>('hidden');
    //let bookIsSelected: 'hidden'|'visible' = 'hidden';
    const chaptersArray = Array(chapters);
    function onBookClick (e: ChangeEvent<HTMLElement>) {
        // What is revealed shall be hidden, and what is hidden shall now be revealed!
        if (bookIsSelected === 'visible') {
            setBookIsSelected('hidden');
        } else {
            console.log('hidden');
            setBookIsSelected('visible');
        }
        
        console.log('Book selected');
    }
    return (<li>
        <Link href='' onClick={onBookClick}>{book}</Link>
        <ul style={{visibility: bookIsSelected}}><li>Hi mate</li></ul>
      </li> 
      )
}

/*
<ol style={{visibility: bookIsSelected}}>
            {chaptersArray.map((chapter, index) => {
                return (<li key={index}>
                    <Link href={'/books/'+book+'/'+String(chapter)}>{String(chapter)}</Link>
                </li>)
            })}
        </ol>
*/