import styles from './header.module.css'
import {BurgerIcon} from "./icons/burgerIcon";
import {useEffect, useState} from "react";
import {BackIcon} from "./icons/backIcon";

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
                    <div className={styles.emptyBlock}/>
                </div>
            </div>
            {bookName}
            <div className={styles.emptyBlock}/>
        </div>

    )
}
