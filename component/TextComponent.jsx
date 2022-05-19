import React from 'react';
import styles1 from "../styles/Home.module.sass";

const TextComponent = ({title, text}) => {
    return (
        <div   className={styles1.textBlock}  >
            <p className={styles1.info_title}>{title}</p>
            <p className={styles1.info_text}>{text}</p>

        </div>
    );
};

export default TextComponent;
