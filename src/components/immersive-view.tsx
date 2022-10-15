import Image from 'next/image'

type propsType = {
    verses: {verseNumber: number, verseText: String}[]
    image: string
}

export default function ImmersiveView({verses, image}: propsType) {
    return (<section>
        <Image src={image} alt='A larger image to immerse oneself in the bible verses'/>
        <div>
            {verses.map((verse: {verseNumber: number, verseText: String}, index: number) => {
                return (<div key={index}>
                    <p>{String(verse.verseNumber)}</p>
                    <p>{verse.verseText}</p>
                </div>)
            })}
            
        </div>
    </section>)
}