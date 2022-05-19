import React from 'react';
import ReactStars from "react-stars";
import styles from './Comment.module.sass'
const Comment = ({avatar,bg,border, name, star, text}) => {
    return (
        <div className={styles.comment_container}>
            <div style={{
                backgroundColor: bg,
                border:  border,
                borderBottom:!border?'1px solid #272D4D24':border
            }} className={styles.comment_block}>
                {
                    avatar?
                        <div style={{gap: 10, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src={avatar}/>
                            <span>  {name}   </span>
                            <ReactStars
                                value={star}
                                count={5}
                                size={24}
                                edit={false}
                                color2={'#ffd700'}/>

                        </div> :
                        <div className={styles.commentRate} >
                            <span>   {name}   </span>
                            <ReactStars
                                value={star}
                                count={5}
                                size={24}
                                edit={false}
                                color2={'#ffd700'}/>

                        </div> }
                    <p>{text}</p>




            </div>

        </div>
    );
};

export default Comment;
