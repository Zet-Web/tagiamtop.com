import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import likeStyles from "../styles/BuyInstagramLikes.module.sass";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {Layer} from "../component/Layer/Layer";

const ErrorPage = () => {
    const router=useRouter()
    useEffect(()=>{
        router.push(router.route.split('/')[1].toLowerCase())
    },[])

    return (
        <Layer firstPage={false}>

            <div className={likeStyles.header_banner} >
                <p className={likeStyles.header_title}>404

                </p>
                <p className={likeStyles.header_text}>Page Not Found
                </p>
            </div>

            <PageTitle title={'Page not found'}/>
        </Layer>
            );
};

export default ErrorPage;
