import React from "react";
import styles from './Layer.module.sass';
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

export const Layer = ({children, firstPage}) => {
    return (
        <div>
            <Header firstPage={firstPage}/>
            {children}
            <Footer />
        </div>
    )
}
