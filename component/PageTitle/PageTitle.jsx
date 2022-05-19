import React from "react";
import Link from 'next/link'
import styles from './PageTitle.module.sass';

export const PageTitle = ({title}) => {
    return (
        <div className={`container ${styles.container}`}>
            <Link href="/"><a>Home</a></Link>
            <img src="/page_title_arrow.svg" alt=""/>
            <span>{title}</span>
        </div>
    )
}
