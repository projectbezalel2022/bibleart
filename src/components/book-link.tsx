import Link from "next/link";
import { ChangeEvent, useState } from "react";

type propsType = {
    key: Number
    book: String
    chapters: Number
}

export default function BookLink({book, chapters}: propsType) {
    const [bookIsSelected, setBookIsSelected] = useState<'hidden'|'visible'>('hidden');
    const [chaptersShown, setChaptersShown] = useState<Number[]>([]);
    //let bookIsSelected: 'hidden'|'visible' = 'hidden';
    let fullChaptersArray: Number[] = [];
    for (let i=0; i<chapters; i++) {
        fullChaptersArray.push(i+1);
    }
    //console.log(chaptersArray)
    function onBookClick (e: ChangeEvent<HTMLElement>) {
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
    }
    return (<li>
        <Link href='' onClick={onBookClick}>{book}</Link>
        <ul style={{visibility: bookIsSelected}}>
            {chaptersShown.map((chapter, index) => {
                let linkRef = '/books/'+book+'/'+String(chapter);
                //console.log(linkRef);
                return (<li key={index}>
                    <Link href={linkRef}>{String(chapter)}</Link>
                </li>)
            })}
        </ul>
      </li> 
      )
}

/*
<ol style={{visibility: bookIsSelected}}>
            
        </ol>
*/