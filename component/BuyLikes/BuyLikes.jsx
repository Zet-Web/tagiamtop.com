import React, {useContext, useMemo, useState, useEffect} from 'react';
import styles from "../../styles/BuyInstagramLikes.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import ModalBuy from "../ModalBuy/ModalBuy";
import {MeContext} from "../../pages/_app";

const BuyLikes = ({first, last, likes, price, banner, text, autoLike, onClick, bgArray, index,id}) => {


    // useEffect(() => {
    //     console.log(index)
    //     if (!Object.keys(bgArray).includes(index)) {
    //        bgArray = Object.fromEntries(
    //             // преобразовать в массив, затем map, затем fromEntries обратно объект
    //             Object.entries(bgArray).map(([key, value]) => [parseInt(key)+4, value ])
    //         );
    //
    //     }
    //
    // }, [])
    const bg={
        0: "/pricebg1.png",
        1: "/pricebg2.png",
        2: "/pricebg3.png",
        3: "/pricebg4.png",
        4:"/pricebg1.png",
        5:"/pricebg2.png",
        6:"/pricebg3.png",
        7:"/pricebg4.png",
        8:"/pricebg1.png",
        9:"/pricebg1.png"
    }
    const {allInfo} = useContext(MeContext)


    return (
        <div className={styles.buyLikes_item_bg}>
            <img className={styles.imgBg} src={bg[index]} style={{position: "absolute", zIndex: -3}}/>
            <div className={styles.buyLikes_item}>
                <div style={{textAlign: 'center', marginBottom: 20}}>
                    <p className={styles.buyLikes_likes}><img src="/like0.svg"/>{likes}</p>
                    <p className={styles.buyLikes_text}>{text}</p>
                </div>
                <div className={styles.buyLikes_banner} style={{background: `url(${banner})`}}>
                    <p className={styles.buyLikes_item_price}>{allInfo?.sym_b}{price}{!allInfo?.sym_b ? allInfo?.sym_a : ''}</p>
                </div>
                <div className={styles.buyLikes_item_description}>
                            <span><img src="/check-circle-1.png" width={18}
                                       height={18}/><p><b>REAL</b> likes from <b>REAL</b> people What's the difference?</p></span>
                    <span><img src="/check-circle-1.png" width={18} height={18}/><p>Guaranteed  <b>Instant Delivery</b> </p></span>
                    <span><img src="/check-circle-1.png" width={18} height={18}/><p>Option to <b>split likes</b> on multiple pictures   </p></span>
                    <span><img src="/check-circle-1.png" width={18} height={18}/><p>Fast Delivery <b>(gradual or instant) </b> </p></span>
                    <span><img src="/check-circle-1.png" width={18} height={18}/><p><b>24/7</b> support </p></span>

                </div>
                <ButtonComponent id={`${id}${likes}`} text="Buy Now" type="fill" style={{width: 200, margin: 10}} onClick={onClick}/>

            </div>
        </div>


    );
};

export default BuyLikes;
