import { useRouter } from "next/router";

export default function BookChapter() {
    const router = useRouter();
    const { book, chapter } = router.query;
    return <p>Book: {book}</p>
}