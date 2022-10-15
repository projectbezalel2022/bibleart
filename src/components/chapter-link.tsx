import Link from 'next/link';
import styles from '../styles/chapter-list.module.css'
import { useRouter } from 'next/router';

export default function ChapterLink({linkRef, chapter}: {linkRef: string, chapter: number}) {
    const router = useRouter();
    return (<Link href={linkRef}>
        <div onClick={()=>{router.push({
              pathname: linkRef,
            });}} className={styles.chapterBox}>
            <p className={styles.chapterText}>{String(chapter)}</p>
      </div>
    </Link>)
}