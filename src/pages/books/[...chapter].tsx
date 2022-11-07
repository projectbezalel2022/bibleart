import { useRouter } from "next/router";
import {bookData} from "../../bookData";
import {Header} from "../../components/header";
import {ViewCard} from "../../components/view-card";

type SSparamsType = {
    chapter: number[]
}

type bookDataVerse = {
    verses: {verseNum: number}[]

}

function BookChapter({item}: any) {
    const router = useRouter();
    const { book, chapter } = router.query;
    console.log(chapter)


    return (
        <div>
            <Header bookName={`Genesis ${chapter}`}/>
            <ViewCard verses={item.verses} image={item.image} chapter={chapter}/>
        </div>
    )
}

export const getStaticPath = () => {

}

export const getServerSideProps = ({params}: {params: SSparamsType}) => {
    const chapterIndex = params.chapter[0] - 1

    return {
        props: {
            item: bookData[chapterIndex]
        }
    }
}

export default BookChapter
