import React from "react";
import styles from './Footer.module.sass';

import {useRouter} from "next/router";

export const Footer = () => {
    const router =useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src="/arrow-ap.svg" alt="" className={styles.app} onClick={() => window.scrollTo(0,0)}/>
                <div className={styles.logo}>
                    <img src="/logo_white.svg" alt=""/>
                    <span >© 2022 copywriting</span>
                </div>


                <img src="/logo_white.svg" alt="" className={styles.logo_mobile}/>
                <span className={styles.copywriting}>© 2022 copywriting</span>


                <div className={styles.info}>
                    <span onClick={()=>router.push('/buy-instagram-likes')}>Buy Instagram Likes</span>
                    <span onClick={()=>router.push('/buy-instagram-followers')}>Buy Instagram Followers</span>
                    <span onClick={()=>router.push('/buy-instagram-views')}>Buy Instagram Views</span>
                    <span onClick={()=>router.push('/buy-instagram-comments')}>Buy Instagram Сomments</span>
                </div>

                <div className={styles.info}>

                    <span onClick={()=>router.push('/contact')}>Сontact</span>
                    <span onClick={()=>router.push('/support')}>Support</span>
                    <span onClick={()=>router.push('/terms')}>Terms</span>
                </div>

                <div className={styles.info}>

                    <span onClick={()=>router.push('/blog')}>Blog</span>
                </div>

            </div>
        </div>
    )
}
