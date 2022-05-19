import React, {useEffect, useState} from 'react';
import styles from '/styles/Home.module.sass'

const InfoBlock = ({reverse, text, buttons, img,fade,alt}) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState(false);
    useEffect(() => {
        if (window){
            setWindowInnerWidth(window.innerWidth)
            console.log(windowInnerWidth)
        }

    }, [])

    return (
        <div className={styles.info_block} style={{flexDirection:reverse?'row-reverse':'row' }}     >

            <img src={img} alt={alt}  />
            <div>
                    {text}

                <span className={styles.info_buttons} >
                    {buttons}
                </span>
            </div>
        </div>

    );
};

export default InfoBlock;
