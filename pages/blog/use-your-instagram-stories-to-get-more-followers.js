import React from 'react';
import styles from "../../styles/BuyInstagramLikes.module.sass";
import {PageTitle} from "../../component/PageTitle/PageTitle";
import {Layer} from "../../component/Layer/Layer";

const UseYourInstagramStoriesToGetMoreFollowers = () => {
    return (
        <Layer firstPage={false}>
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Use Your Instagram Stories To Get More Followers - 7 Ways To Improve Your Stories
                    <img src="/buyfollowerfull.svg" width={50} height={40}/></p>


                <img className={styles.header_arrow} src="/arrow-detail.svg" alt=""/>
            </div>
            <PageTitle title={'Get Followers on Instagram 2022: Complete Guide'}/>

        </Layer>

    );
};

export default UseYourInstagramStoriesToGetMoreFollowers;
