import React, {useState} from 'react';
import styles from "./ModalBuy.module.sass";
import loginStyles from "../../styles/Login.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import AddAccount from './AddAccount'
import Stage3 from "./Stage3";

const ChildModal1 = ({setOpen, amount, autoLike, setPageActive, userInfo}) => {
    const [chosen, setAddAccount] = useState(false)
    const [isBuy, setIsBuy] = useState(false)
    const [posts, setPosts] = useState([{
        img: '/accountexample.png',
        index: 0
    }])

    return (

            <div className={styles.modalBuy_container}>
                    <img className={styles.close} src="/closegrey.svg" onClick={() => setOpen(false)}/>
                    {
                        autoLike ? <p className={styles.modalBuy_title}>Instagram {amount} autolikes per post</p> :
                            <p className={styles.modalBuy_title}>Choose account</p>

                    }
                    <span style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <img className={styles.line} src="/modalline.svg"/>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652'}}>
                    1
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#F0F0F0', color: 'black'}}>
                    2
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#F0F0F0', color: 'black'}}>
                    3
                    </p>
                    </span>

                    <div className={styles.postList}>
                        <div className={styles.account_item} onClick={() => setPageActive(3)
                        }>
                            <span style={{display: 'flex', alignItems: 'center'}}>
                                <div className={styles.account_check}/>
                                <img src={userInfo?.avatar}/>
                            </span>
                        </div>
                    </div>



                    <a onClick={() => setPageActive(1)}>Add new one</a>

                </div>

    );
};

export default ChildModal1;
