import styles from './view-card.module.css'
import Image from 'next/image'
import Link from "next/link";

export const ViewCard = ({verses, image, chapter}: {verses: any[], image: string, chapter: any}) => {
    return (
        <Link href={`/books/${chapter}`}>
            <a className={styles.container}>
                <div className={styles.verses}>
                    {verses.map((verse, i) => {
                        return (
                            <div className={styles.singleVerse} key={verse.verseText + i}>
                                <div className={styles.num}>{verse.verseNum}</div>
                                <div>{verse.verseText}</div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.image}>
                    <Image src={image} width={80} height={120} />
                </div>
            </a>
        </Link>
    )

}
