import styles from './header.module.css'
import {BurgerIcon} from "./icons/burgerIcon";
import {useEffect, useState} from "react";
import {BackIcon} from "./icons/backIcon";
import Link from "next/link";

const navData = [
    '1', '2', '3'
]

export const Header = ({bookName}: {bookName: string}) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    useEffect(() => {
        if (isMenuOpened) {
            document.body.style.overflow = 'hidden'
        } else document.body.style.overflow = 'visible'
    }, [isMenuOpened])

    return (
        <div className={styles.container}>
            <button onClick={() => setIsMenuOpened(!isMenuOpened)} className={styles.button}>
                <BurgerIcon/>
            </button>
            <div className={isMenuOpened ? styles.menuIsVisible : styles.menuIsHidden}>
                <div className={styles.menu}>
                    <button onClick={() => setIsMenuOpened(!isMenuOpened)} className={styles.button}>
                        <BackIcon/>
                    </button>
                    Browse
                    <Link href={`/`}>
                        <a>Home</a>
                    </Link>
                </div>
                <div className={styles.menuList}>
                    {navData.map((navItem, i) => {
                        return (<Link key={i} href={`/books/${navItem}`}>
                            <a onClick={() => setTimeout(() => setIsMenuOpened(false), 300)}>
                                <div key={i}>{navItem}</div>
                            </a>
                        </Link>)
                    })}
                </div>
            </div>
            {bookName}
            <div className={styles.emptyBlock}/>
        </div>
    )
}
