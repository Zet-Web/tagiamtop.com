import React, {useState} from "react";
import styles from './Header.module.sass';
import Link from 'next/link'
import {useRouter} from "next/router";

export const Header = ({firstPage}) => {

    const [openMenu, setOpenMenu] = useState(false);
    const router =useRouter()
    return (
        <div className={`${styles.container} ${openMenu ? styles.container_active : ''}`}>
            <div  className={styles.menu}>
                <button className={styles.burger_menu} onClick={() => setOpenMenu(prev => !prev)}>{!openMenu ? <img src="/menu.svg" alt=""/> : <img src="/close.svg" alt=""/>}</button>
                <Link href={'/'} >{firstPage ? <img src="/logo_white_top.svg" alt=""/>: <img src="/logo.svg" alt=""/>}</Link>
            </div>

            <Link href={'/buy-instagram-likes'} ><span className={`${firstPage ? styles.white : styles.link}`}>Buy Instagram Likes</span></Link>
            <Link href={'/buy-instagram-followers'} ><span className={`${firstPage ? styles.white : styles.link}`}>Buy Instagram Followers</span></Link>
            <Link href={'/buy-instagram-views'} ><span className={`${firstPage ? styles.white : styles.link}`}>Buy Instagram Views</span></Link>
            <Link href={'/buy-instagram-comments'} ><span className={`${firstPage ? styles.white : styles.link}`}>Buy Instagram Сomments</span></Link>

            <div className={`${styles.menu_open} ${openMenu && styles.active}`}>
                <Link href={'/buy-instagram-likes'} ><span className={styles.mobile_span}>Buy Instagram Likes</span></Link>
                <Link href={'/buy-instagram-followers'} ><span className={styles.mobile_span}>Buy Instagram Followers</span></Link>
                <Link href={'/buy-instagram-views'} ><span className={styles.mobile_span}>Buy Instagram Views</span></Link>
                <Link href={'/buy-instagram-comments'} ><span className={styles.mobile_span}>Buy Instagram Сomments</span></Link>
            </div>
        </div>
    )
}
