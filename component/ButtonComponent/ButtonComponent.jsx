import React from "react";
import styles from './ButtonComponent.module.sass';

export const ButtonComponent = ({text, onClick, type, style, typeInput, disabled,id}) => {
    return (
        <button id={id} disabled={disabled} onClick={onClick} type={typeInput} className={`${styles.main} ${type === 'mainOutline' ? styles.mainOutline : ''} ${type === 'mainFill' ? styles.mainFill : ''} ${type === 'fill' ? styles.fill : ''} ${type === 'outline' ? styles.outline : ''}  `} style={style}>
            {text}
        </button>
    )
}
