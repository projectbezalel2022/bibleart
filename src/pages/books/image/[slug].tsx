import {bookData} from "../../../bookData";
import Image from 'next/image'
import {BackIcon} from "../../../components/icons/backIcon";
import {useRouter} from "next/router";
import styles from '../../../styles/Home.module.css'

const Slug = ({item}: any) => {
    const router = useRouter()
    console.log(item)

    return (
        <div>
            <div className={styles.back} onClick={() => router.back()}>
                <BackIcon/>
            </div>

            <Image
                src={item.image}
                layout="responsive"
                objectFit="cover"
                width={429}
                height={635}
                priority
            />

            <div className={styles.wrapper}>
                {item.verses.map((verse: any, i: number) => {
                    return (
                        <div className={styles.singleVerse} key={verse.verseText + i}>
                            <div className={styles.num}>{verse.verseNum}</div>
                            <div>{verse.verseText}</div>
                        </div>
                    )
                })}
            </div>
         </div>
    )
}


export const getServerSideProps = ({params}: any) => {
    const chapterIndex = params.slug[0] - 1

    return {
        props: {
            item: bookData[chapterIndex]
        }
    }
}

export default Slug
