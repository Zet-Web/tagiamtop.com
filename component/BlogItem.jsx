import React from 'react';
import styles from "../styles/Home.module.sass";

const BlogItem = ({img,text,onClick}) => {
    return (
        <div className={styles.blog_container}   >
            <img src={img} width="100%" height="100%" style={ {marginRight: 20}}/>

            <div onClick={onClick}  >
                <p className={styles.blog_item_p}>Instagram News</p>
                <p className={styles.blog_item_title}    >
                    {text}
                </p>
                <span >
                    <p >by Admin</p>
                    <p>4 months ago</p>
                </span>
            </div>
        </div>
    );
};

export default BlogItem;
