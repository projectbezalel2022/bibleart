import Image from 'next/image';
import styles from '../styles/immersive-view.module.css';

type propsType = {
    verses: {verseNumber: number, verseText: String}[]
    image: string
}

export default function ImmersiveView({verses, image}: propsType) {
    return (<section className={styles.mainSection}>
        <Image className={styles.versesImage} src={image} alt='A larger image to immerse oneself in the bible verses'/>
        <div className={styles.textContainer}>
            {verses.map((verse: {verseNumber: number, verseText: String}, index: number) => {
                return (<div className={styles.oneVerse} key={index}>
                    <p className={styles.verseNumberLabel}>{String(verse.verseNumber)}</p>
                    <p className={styles.verseText}>{verse.verseText}</p>
                </div>)
            })}
            
        </div>
    </section>)
}