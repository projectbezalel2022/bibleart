import Image from 'next/image'
import '../styles/immersive-view.css';

type propsType = {
    verses: {verseNumber: number, verseText: String}[]
    image: string
}

export default function ImmersiveView({verses, image}: propsType) {
    return (<section className='main-section'>
        <Image className='verses-image' src={image} alt='A larger image to immerse oneself in the bible verses'/>
        <div className='text-container'>
            {verses.map((verse: {verseNumber: number, verseText: String}, index: number) => {
                return (<div className='one-verse' key={index}>
                    <p className='verse-number-label'>{String(verse.verseNumber)}</p>
                    <p className='verse-text'>{verse.verseText}</p>
                </div>)
            })}
            
        </div>
    </section>)
}