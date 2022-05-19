import '../styles/globals.sass'
import React, {createContext, useEffect, useState} from "react";
import useAxios from "../hooks/useAxios";
import AOS from "aos";
import Head from "next/head";
export const MeContext = createContext()

function MyApp({Component, pageProps}) {
    const axios = useAxios()
    const [allInfo, setAllInfo] = useState({});
    const [price, setPrice] = useState({});
    const [result,setResult]=useState({})
    const [userInfo,setUserInfo]=useState({})
    const [type, setType] = useState({});
    const [url, setUrl] = useState('');
    const getAllInfo = async() => {
        try{
            const res = await axios.post('/user_info.php')
            if (res.status === 200) {
                setAllInfo(prev => res.data.data)
            }
        }catch(e){
            console.log(e)
        }
    }
    const getPrice = async() => {
        try{
            const res = await axios.post('/get_plans.php')
            if (res.status === 200) {
                setPrice(prev => res?.data?.data?.Instagram)
                console.log('price', res?.data?.data?.Instagram)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        getAllInfo()
        getPrice()
        AOS.init();
    }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description" content="We have launched this project to increase the popularity of your Instagram account with cheap prices, and amazing customer support. We are proud of it"/>
                <meta name="og:description" content="We have launched this project to increase the popularity of your Instagram account with cheap prices, and amazing customer support. We are proud of it"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Instagram Likes, Followers, Views in 2022 - Tag I am Top"/>
                <meta property="title" content="Buy Instagram Likes, Followers, Views in 2022 - Tag I am Top"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="We have launched this project to increase the popularity of your Instagram account with cheap prices, and amazing customer support. We are proud of it"/>
                <meta name="twitter:title" content="Buy Instagram Likes, Followers, Views in 2022 - Tag I am Top"/>
                <meta property="og:site_name" content="Tagiamtop"/>
                <meta property="og:url" content="https://tagiamtop.com"/>

                <link rel="canonical" href="https://tagiamtop.com"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9"/>
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description"
                      content="Buy Instagram likes from TagIamTop now with a price under $1 per one. Instant delivery and support. We can help you to develop your online business."/>
                <meta name="og:description"
                      content="Buy Instagram likes from TagIamTop now with a price under $1 per one. Instant delivery and support. We can help you to develop your online business."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Instagram Likes - Social Media Services Store - TagIamTop"/>
                <meta property="title" content="Buy Instagram Likes - Social Media Services Store - TagIamTop"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description"
                      content="Buy Instagram likes from TagIamTop now with a price under $1 per one. Instant delivery and support. We can help you to develop your online business."/>
                <meta name="twitter:description"
                      content="Buy Instagram likes from TagIamTop now with a price under $1 per one. Instant delivery and support. We can help you to develop your online business."/>
                <meta name="twitter:title" content="Buy Instagram Likes - Social Media Services Store - TagIamTop"/>
                <meta name="twitter:title" content="Buy Instagram Likes - Social Media Services Store - TagIamTop"/>
                <meta property="og:url" content="https://tagiamtop.com/buy-instagram-likes"/>
                <link rel="canonical" href="https://tagiamtop.com/buy-instagram-likes"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description" content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta property="title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta name="og:description" content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta name="twitter:title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:url" content="https://tagiamtop.com/buy-instagram-comments"/>
                <link rel="canonical" href="https://tagiamtop.com/buy-instagram-comments"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description" content="Buy Instagram Followers from TagIamTop at $1.30 now. Instant delivery and amazing customer support. New followers can help you to develop your business."/>
                <meta name="og:description" content="Buy Instagram Followers from TagIamTop at $1.30 now. Instant delivery and amazing customer support. New followers can help you to develop your business."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Instagram Followers - Social Media Services Store"/>
                <meta property="title" content="Buy Instagram Followers - Social Media Services Store"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="Buy Instagram followers from Tagiamtop. Instant delivery, real followers and friendly 24/7 customer support. Try us today."/>
                <meta name="twitter:title" content="Buy Instagram Followers - Social Media Services Store"/>
                <meta property="og:url" content="https://tagiamtop.com/buy-instagram-followers"/>
                <link rel="canonical" href="https://tagiamtop.com/buy-instagram-followers"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description" content="Buy Instagram views from TagIamTop with a price under $1 per one. Instant delivery and friendly support. We can help you to develop your online business."/>
                <meta name="og:description" content="Buy Instagram views from TagIamTop with a price under $1 per one. Instant delivery and friendly support. We can help you to develop your online business."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Instagram Views - Social Media Services Store - TagIamTop"/>
                <meta property="title" content="Buy Instagram Views - Social Media Services Store - TagIamTop"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="Buy Instagram views from TagIamTop with a price under $1 per one. Instant delivery and friendly support. We can help you to develop your online business."/>
                <meta name="twitter:title" content="Buy Instagram Views - Social Media Services Store - TagIamTop"/>

                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:url" content="https://tagiamtop.com/buy-instagram-views"/>
                <link rel="canonical" href="https://tagiamtop.com/buy-instagram-views"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description" content="Social Media Marketing Blog. Read our tips and stories"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Blog - Tag I am Top"/>
                <meta property="title" content="Blog - Tag I am Top"/>
                <meta property="og:description" content="Social Media Marketing Blog. Read our tips and stories"/>
                <meta name="twitter:description" content="You'll find tips on Instagram growth and general social media advice as well as latest updates related to our services."/>
                <meta name="twitter:title" content="Tagiamtop - Blog"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:site_name" content="Tagiamtop"/>
                <meta property="og:url" content="https://likes.io/blog"/>
                <link rel="canonical" href="https://likes.io/blog"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description" content="Got any questions or feedback? Contact Us - Tag I am Top."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Contact Us - Tag I am Top"/>
                <meta property="title" content="Contact Us - Tag I am Top"/>
                <meta property="og:description" content="Got any questions or feedback? Contact Us - Tag I am Top."/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:site_name" content="Tagiamtop"/>
                <meta property="og:url" content="https://likes.io/contact"/>
                <link rel="canonical" href="https://likes.io/contact"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description" content="Customer Support of platform - Tag I am Top."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Customer Support - Tag I am Top"/>
                <meta property="title" content="Customer Support - Tag I am Top"/>
                <meta property="og:description" content="Customer Support of platform - Tag I am Top."/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:site_name" content="Tagiamtop"/>
                <link rel="canonical" href="https://likes.io/support"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>

                <meta name="description" content="Please read Terms of Service of our platform and use TagIamTop safely."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Terms of Service - Tag I am Top"/>
                <meta property="title" content="Terms of Service - Tag I am Top"/>
                <meta property="og:description" content="Please read Terms of Service of our platform and use TagIamTop safely."/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:site_name" content="Tagiamtop"/>
                <link rel="canonical" href="https://likes.io/terms"/>
            </Head>
        <MeContext.Provider value={{allInfo, getAllInfo, price,result,setResult,userInfo,setUserInfo,type, setType,url, setUrl}}>
            {price?.Comments ? <Component {...pageProps} /> : <div></div>}
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
            <link rel="shortcut icon" href="/icon.ico" />
        </MeContext.Provider>
        </>
    )
}

export default MyApp
