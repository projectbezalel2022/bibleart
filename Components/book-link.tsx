import Link from "next/link";
import { ChangeEvent, useState } from "react";

type propsType = {
    key: Number
    book: String
    chapters: Number
}

export default function BookLink({key, book, chapters}: propsType) {
    const [bookIsSelected, setBookIsSelected] = useState(false);
    const chaptersArray = Array(chapters);
    function onBookClick () {
        setBookIsSelected(!bookIsSelected);
        console.log('Book selected');
    }
    return (<li>
        <Link href='' onClick={onBookClick}>{book}</Link>
        <ol>
            {chaptersArray.map((chapter, index) => {
                return (<li key={index}>
                    <Link href={'/book-chapter/'+book+'/'+String(chapter)}>{String(chapter)}</Link>
                </li>)
            })}
        </ol>
      </li> 
      )
}