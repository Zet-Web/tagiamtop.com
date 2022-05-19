import React, {useContext, useEffect, useState} from 'react';
import {Layer} from "../component/Layer/Layer";
import styles from "../styles/BuyInstagramLikes.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import styles1 from "../styles/Home.module.sass";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {useRouter} from "next/router";
import TextComponent from "../component/TextComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Carousel from "nuka-carousel";
import {MeContext} from "./_app";
import useAxios from "../hooks/useAxios";
import Head from "next/head";
import ModalBuy from "../component/ModalBuy/ModalBuy";
/* eslint-disable */
const BuyInstagramViews = ({text}) => {


    const axios = useAxios()
    const router = useRouter()
    const {price,setUrl} = useContext(MeContext)
    const [windowInnerWidth, setWindowInnerWidth] = useState('');
    const [comment, setComment] = useState([]);
    const [open, setOpen] = useState(false)
    const [counts, setCounts] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [readMore,setReadMore]=useState(3)
    const getComment = async() => {
        try{
            const data = new FormData()
            data.append('system', 'Instagram')
            data.append('service', 'Views')
            const res = await axios.post('/review_list.php', data)
            if (res.status === 200) {
                setComment(prev => res.data.data)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        if (window) setWindowInnerWidth(window?.innerWidth)
        getComment()
    }, [])
    const [buyType, setBuyType] = useState('');
    return (
        <Layer firstPage={false}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>Tagiamtop</title>
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
            </Head>
            {
                open && <ModalBuy setOpen={setOpen} open={open} count={counts} amount={priceValue} times={'one time'} service={buyType} tarifs={price?.Views?.plans} setService={setBuyType} setCounts={setCounts} setAmount={setPriceValue} />
            }
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Buy Instagram Views <img src="/like.svg"/></p>
                <p className={styles.header_text}>At tagiamtop, you can buy Instagram likes quickly, safely and easily
                    with just a few clicks. See our deals below!</p>

                <img className={styles.header_arrow} src="/arrow-detail.svg" alt=""/>
            </div>

            <div className={styles.container}>

                <PageTitle title={'Buy Instagram Views'}/>

                <p className={styles.buyLikes_title}>Our rates</p>
                <div className={styles.buyLikes_item_container}>
                    <Carousel
                        wrapAround={true}
                        slidesToShow={windowInnerWidth < 690 ? 1 : windowInnerWidth < 1000 ? 2 : windowInnerWidth < 1300 ? 3 : 4}>
                        {price?.Views?.plans.map((item,index) => <BuyLikes likes={item.count} price={item.price} banner="/buylikesbanner.png" index={index}
                                                                     onClick={() => {
                                                                         setPriceValue(prev => item?.price)
                                                                         setCounts(prev => item?.count)
                                                                         setUrl('buy-instagram-views')
                                                                         router.push({
                                                                             pathname:`/step1`,
                                                                             query:{service:"Views",counts:item?.count,priceValue:item?.price}
                                                                         })
                                                                         setBuyType("Views")
                                                                     }}
                                                                     text="Instagram Views" id={"VIEWS"}/>)}
                    </Carousel>
                </div>

                <p className={styles1.review_comment_title} style={{marginTop: '150px'}}>Comments about Views</p>
                <p className={styles1.info_text} style={{textAlign: 'center'}}> Here at Buzzoid we pride ourselves in
                    exceptional service and affordable prices. Don’t just take our word for it – check out what
                    customers say about our Instagram followers below</p>
                <div className={`container ${styles1.review_comment_row}`}>
                    <div className={styles1.comments_container}>
                        {comment?.map((item,index) => index< readMore&& <Comment key={item.name}   name={item.name} star={item.star} text={item.text}/>)}

                        <p style={{marginTop: 20}}><a style={{color: "#8C66FA", cursor: 'pointer'}} onClick={()=>comment&&setReadMore(comment.length)}>Read More
                            Reviews</a></p>
                    </div>
                    <Review service={'Views'}/>
                </div>
                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="600"  >
                <InfoBlock
                    text={
                        <p style={{ marginBottom:30,padding:20}}>

                            <p className={styles1.info_text}  >
                                <img src="/buyviewsinfo1.png" alt="buy Instagram views" style={{float: 'left',marginRight:80,marginBottom:30}}/>
                                <p className={styles1.info_title}>{text[0].title}</p>
                                {text[0].content}
                            </p>
                        </p>}
                    reverse={false} fade={true}
                /></div>
                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="600"  ><InfoBlock
                    text={
                        <p style={{ marginBottom:30,padding:20}}>
                            <p className={styles1.info_title}>{text[1].title}</p>
                            <p className={styles1.info_text} ><img src="/buyviewsinfo2.png" alt="buy Instagram views with crypto" style={{float: 'right',marginLeft:100,marginBottom:30}}/>
                                {text[1].content}
                                <li>{text[1].li1}</li>
                                <li>{text[1].li2}</li>
                                <li>{text[1].li3}</li>
                                <li>{text[1].li4}
                                </li>
                                <br/>
                                {text[1].content2}
                            </p>

                        </p>}
                    reverse={true}
                /></div>
                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="600"  ><TextComponent text={

                    <p className={styles1.info_text} style={{lineHeight: 3, marginBottom: 20}}  >{text[2].content}</p>}
                            title={<p className={styles1.info_title}>{text[2].title}</p>}/></div>
                <div    data-aos="fade-up" data-aos-duration="2000" data-aos-offset="700"  ><TextComponent text={

                <div className={styles1.textColumns}   >
                    <div>
                    <p className={styles1.info_text} style={{display: 'flex', flexDirection: 'row'}}>
                        <span className={styles1.question_p_index} style={{backgroundColor: "#F0F0F0", color: 'black'}}>
                            1
                        </span>
                        <p className={styles1.textP}>Select the number of views you would like to buy. There are options ranging from as low as 200,
                            500, 1000 views to as high as 50 000, 100 000, 200 000, 500 000 views. Pick from options,
                            depending on the priority of the video and the size of the target audience.</p>
                    </p>
                    <p className={styles1.info_text} style={{display: 'flex', flexDirection: 'row'}}>
                        <p className={styles1.question_p_index} style={{backgroundColor: "#F0F0F0", color: 'black'}}>
                            2
                        </p>
                        <p className={styles1.textP}>Insert your username and email in the box provided. Please note that the username you will provide must have at least one recent post.</p>
                    </p>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                        <p className={styles1.info_text} style={{display: 'flex', flexDirection: 'row'}}>
                        <p className={styles1.question_p_index} style={{backgroundColor: "#F0F0F0", color: 'black'}}>
                            3
                        </p>
                        <p className={styles1.textP}>Pay for the views using your PayPal. Your Instagram account and PayPal are both secure when using our services.</p>
                        </p>
                        <p className={styles1.info_text} style={{display: 'flex', flexDirection: 'row'}}>
                        <p className={styles1.question_p_index} style={{backgroundColor: "#F0F0F0", color: 'black'}}>
                            4
                        </p>
                        <p className={styles1.textP}>Conclude your payment and watch the views delivered within 5 minutes
                            of payment confirmation.</p>
                        </p>
                        <p className={styles1.info_text} style={{display: 'flex', flexDirection: 'row'}}>
                        <p className={styles1.question_p_index} style={{backgroundColor: "#F0F0F0", color: 'black'}}>
                            5
                        </p>
                        <p className={styles1.textP}>Also, views don depreciate after the service has been rendered.</p>
                        </p>
                    </div>
                </div>} title={<p className={styles1.info_title}>How to buy Instagram views</p>}/></div>

            </div>
        </Layer>
    );
};
export async function getStaticProps({params}) {


    return {
        props: {
            text: [
                {
                    title: "Buy Instagram Views",
                    content: "Going through the stress of creating a post on Instagram and seeing it not get the attention"+
                    "it deserves can be frustrating. As a brand, an individual, or a business, your Instagram"+
                    "posts need to get to as many people as possible to make an impact and have exhausted all the"+
                    "options available. See your reputation and credibility as well as your brand recognition"+
                    "increase significantly — let your views soar to new heights on one of the world’s most"+
    "famous and vital social media platforms!"+
    "Buy Instagram Views"+
    "The best way to ensure your video gets as much attention as possible within a short time is"+
    "to buy Instagram views."+
    "Instagram is simply the best social media platform for brand recognition. It is considered"+
    "the photo-and-video-sharing social media behemoth for consumers and brands alike - Instagram"+
    "users are sharing a whopping 95 million photos and videos per day!"+
    "Another interesting point is that Instagram followers’ average age is becoming younger —18-"+
    "to 29-year-olds are currently the most active Instagram followers and users — and they are"+
    "also the buyers and leaders of tomorrow. Create your brand, create awareness! All you need"+
    "to do is get more views on Instagram, the hottest app for sharing videos.",

                },
                {
                    title: "Why Should You Buy Instagram Views?",
                    content: " It's a good idea to buy Instagram views to increase the reach\n" +
                        "                                and popularity of your video. A video with a high view count benefits you in so many ways,\n" +
                        "                                either as an individual:",
                    li1: "hoping to increase online popularity,",
                    li2: "who wants to spread a meaningful message or",
                    li3: "who wishes to become an influencer and get paid by advertising for brands",
                    li4: "as a brand that wants to reach a wider audience and increase trust with the high view\n" +
                        "                                    count or as a business that wants to explore new markets, introduce new products, or\n" +
                        "                                    improve the popularity of an existing one.",
                    content2: "Buying Instagram views means your video becomes popular. By the design of Instagram's\n" +
                        "                                algorithm 2021 - 2022, your popular video will be suggested to other users from where you\n" +
                        "                                will get more organic views, likes and reach your target audience."

                },

                {
                    title: "Buy Instagram Views With Instant Delivery",
                    content: "Are you convinced you need to\n" +
                        "                        buy views? Your views are delivered instantly, within five minutes of purchase, and your video view\n" +
                        "                        count shoots up immediately.\n" +
                        "                        It is advised you buy views for recent videos and immediately after you post them, starting with\n" +
                        "                        high momentum. This will pique people's interest more when they see a new video with a high view\n" +
                        "                        count than an old video whose views suddenly shoot up, and users might get skeptical and assume\n" +
                        "                        there's more than meets the eye."
                },

            ]


        }
    }
}

export default BuyInstagramViews;
