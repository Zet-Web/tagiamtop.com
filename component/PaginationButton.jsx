import React from 'react';
import styles from "../styles/Home.module.sass";
const PaginationButton = ({bg,color,icon}) => {
    return (
        <div className={styles.pagination_button} style={{ backgroundColor: bg,color:color}}>
            {icon}
        </div>
    );
};

export default PaginationButton;
