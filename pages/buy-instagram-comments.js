import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/BuyInstagramLikes.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import styles1 from "../styles/Home.module.sass";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {Layer} from "../component/Layer/Layer";
import {useRouter} from "next/router";
import TextComponent from "../component/TextComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Carousel from "nuka-carousel";
import {MeContext} from "./_app";
import useAxios from "../hooks/useAxios";
import Head from "next/head";
import ModalBuy from "../component/ModalBuy/ModalBuy";

const BuyInstagramComments = ({text}) => {

    const router = useRouter()
    const {price, setUrl} = useContext(MeContext)
    const axios = useAxios()

    const [windowInnerWidth, setWindowInnerWidth] = useState('');

    const [comment, setComment] = useState([]);
    const [open, setOpen] = useState(false)
    const [counts, setCounts] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [readMore, setReadMore] = useState(3)
    const getComment = async () => {
        try {
            const data = new FormData()
            data.append('system', 'Instagram')
            data.append('service', 'Comments')
            const res = await axios.post('/review_list.php', data)
            if (res.status === 200) {
                setComment(prev => res.data.data)
            }
        } catch (e) {
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
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9"/>
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>Tagiamtop</title>
                <meta name="description"
                      content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta property="title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta name="og:description"
                      content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description"
                      content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."/>
                <meta name="twitter:title" content="Buy Instagram Comments - Social Media Services Store"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:url" content="https://tagiamtop.com/buy-instagram-comments"/>
                <link rel="canonical" href="https://tagiamtop.com/buy-instagram-comments"/>
            </Head>
            {
                open && <ModalBuy setOpen={setOpen} open={open} count={counts} amount={priceValue} times={'one time'}
                                  service={buyType} tarifs={price?.Comments?.plans} setService={setBuyType}
                                  setCounts={setCounts} setAmount={setPriceValue}/>
            }
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Comments <img src="/like.svg"/></p>
                <p className={styles.header_text}>At tagiamtop, you can buy Instagram likes quickly, safely and easily
                    with just a few clicks. See our deals below!</p>

                <img className={styles.header_arrow} src="/Arrow-detail.svg" alt=""/>
            </div>

            <div className={styles.container}>

                <PageTitle title={'Comments'}/>

                <div>
                    <p className={styles.buyLikes_title}>Our rates</p>
                    <div className={styles.buyLikes_item_container}>
                        <Carousel
                            wrapAround={true}
                            slidesToShow={windowInnerWidth < 690 ? 1 : windowInnerWidth < 1000 ? 2 : windowInnerWidth < 1300 ? 3 : 4}>
                            {price?.Comments?.plans.map((item, index) => <BuyLikes key={index} likes={item.count}
                                                                                   price={item.price}
                                                                                   banner="/buylikesbanner.png"
                                                                                   index={index}
                                                                                   onClick={() => {
                                                                                       setPriceValue(prev => item?.price)
                                                                                       setCounts(prev => item?.count)
                                                                                       setUrl('buy-instagram-comments')
                                                                                       router.push({
                                                                                           pathname: `/step1`,
                                                                                           query: {
                                                                                               service: "Comments",
                                                                                               counts: item?.count,
                                                                                               priceValue: item?.price
                                                                                           }
                                                                                       })
                                                                                       setBuyType("Comments")
                                                                                   }} text="Instagram Comments"
                                                                                   id={"COMM"}
                            />)}
                        </Carousel>
                    </div>
                </div>
                <div>
                    <p className={styles1.review_comment_title}>Comments about Comments</p>
                    <p className={styles1.info_text} style={{textAlign: 'center'}}> Here at Buzzoid we pride ourselves
                        in
                        exceptional service and affordable prices. Don’t just take our word for it – check out what
                        customers say about our Instagram followers below</p>

                    <div className={`container ${styles1.review_comment_row}`}>
                        <div className={styles1.comments_container}>
                            {comment?.map((item, index) => index < readMore &&
                                <Comment key={item.name} name={item.name} star={item.star} text={item.text}/>)}

                            <p style={{marginTop: 20}}><a style={{color: "#8C66FA", cursor: 'pointer'}}
                                                          onClick={() => comment && setReadMore(comment.length)}>Read
                                More
                                Reviews</a></p>
                        </div>
                        <Review service={'Comments'}/>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="400">
                    <InfoBlock
                        text={
                            <p style={{marginBottom: 30, padding: 20}}>
                                <img src="/commentsinfo1.png" alt="buy Instagram comments"
                                     style={{float: 'left', marginRight: 80, marginBottom: 30}}/>
                                <p className={styles1.info_title}>{text[0].title}</p>
                                <p className={styles1.info_text}>{text[0].content}
                                    <li>{text[0].li1}</li>
                                    <li>{text[0].li2}</li>
                                    <li>{text[0].li3}</li>
                                    <li>{text[0].li4}</li>
                                    <li>{text[0].li5}
                                    </li>
                                </p>
                                <p className={styles1.info_title}>{text[0].title2}</p>
                                <p className={styles1.info_text}>
                                    <p>{text[0].content2}</p>
                                </p>
                            </p>}
                        reverse={false} fade={true}
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="500">
                    <InfoBlock
                        text={
                            <p style={{marginBottom: 30, padding: 20}}>

                                <p className={styles1.info_text}>
                                    <img src="/commentsinfo2.png" alt="buy real Instagram comments"
                                         style={{float: 'right', marginLeft: 80, marginBottom: 30}}/>
                                    <p className={styles1.info_title}>{text[1].title}</p>
                                    {text[1].content}
                                </p>
                                <p className={styles1.info_title} style={{marginTop: 30}}>{text[1].title2}</p>
                                <p className={styles1.info_text}>
                                    {text[1].content2}
                                </p>
                            </p>}
                        reverse={true}
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="500">
                    <TextComponent title={<p className={styles1.info_title}>{text[2].title}</p>}
                                   text={

                                       <p className={styles1.info_text} style={{lineHeight: 3, marginBottom: 20}}>{text[2].content}</p>}/>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="600"><TextComponent
                    title={<p className={styles1.info_title}>{text[3].title}</p>}
                    text={
                        <p className={styles1.info_text} style={{lineHeight: 3}}>{text[3].content}</p>}/>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="700"><InfoBlock
                    text={
                        <p style={{marginLeft: 60, marginBottom: 30}}>
                            <p className={styles1.info_title}>{text[4].title}</p>
                            <p className={styles1.info_text}>
                                {text[4].content}
                            </p>
                            <p className={styles1.info_title} style={{marginTop: 30}}>{text[4].title2}</p>
                            <p className={styles1.info_text}>
                                <span style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap'
                                }}>
                                    <li>{text[4].li1}</li>
                                    <li>{text[4].li2}</li>
                                    <li>{text[4].li3}</li>
                                    <li>{text[4].li4}</li>
                                    <li>{text[4].li5}</li>
                                </span>
                                {text[4].content2}
                            </p>
                        </p>}
                    reverse={false}
                    img="/commentsinfo3.png" alt={"Instagram comments"}/>
                </div>
            </div>
        </Layer>
    )
        ;
};

export async function getStaticProps({params}) {


    return {
        props: {
            text: [
                {
                    title: "Buy Instagram Comments",
                    content: "What’s not to love?" +
                        "Instagram is THE social media app. It allows its millions of global users to:",
                    li1: "hare their aesthetically pleasing photos,",
                    li2: "post videos of their interesting busy lives,",
                    li3: "filter photos with built-in professional-looking Instagram filters,",
                    li4: "tweak application settings to suit their individual needs,",
                    li5: "socialize with the friends they already have and ultimately and make millions of new\n" +
                        "online ones worldwide!",
                    title2: "Wow! Why would you want to buy\n" +
                        "Instagram comments?",
                    content2: "It’s no wonder why everybody wants to buy Instagram comments.\n" +
                        "                                    It would ridiculous not to want to! Comments for Instagram have a great effect -\n" +
                        "                                it\n" +
                        "                                raises brand and Instagram page recognition efficiently and fast, boosts your profits in the\n" +
                        "                                long run, creates social media engagement and ultimately makes you and your brand famous.\n" +
                        "                                Not to mention, you get immense satisfaction because of a well-done job – so it covers all\n" +
                        "                                the reasons why you were on Instagram in the first place.\n" +
                        "                                More importantly, having more comments rockets your page to Instagram stardom – something\n" +
                        "                                that Poprey has perfected as a service of buying Instagram comments!"
                },
                {
                    title: "Feeling over whelmed? Don’t be!",
                    content: "And if you are feeling a bit overwhelmed by all of it, like some of us might be, there is no reason to worry! Poprey has come to your rescue, my dear! In today’s modern world, we might not have unlimited time. We might not have the never-ending creative and innovative flow of new ideas that we need. We might not have the expert knowledge to achieve the results we want and obtain as many comments to our posts on Instagram as we dream of.",
                    content2: " Getting people to comment on your page is hard work – why not make it automatic?\n" +
                        "                                    Time is\n" +
                        "                                    money and, ultimately, it is a luxury in very short supply. Our team at Poprey fully\n" +
                        "                                    understands that.\n" +
                        "                                    Sure, you could go and attend numerous social media marketing courses created by\n" +
                        "                                    Instagram\n" +
                        "                                    gurus to give have the necessary tools and knowledge to understand how the new\n" +
                        "                                    Instagram\n" +
                        "                                    algorithm works. But in fact, this overcomplicated scenario is actually why you are\n" +
                        "                                    here\n" +
                        "                                    —not\n" +
                        "                                    to spend more time and money that you might not have. You are here to buy Instagram\n" +
                        "                                    comments\n" +
                        "                                    and in the end, it all boils down to complete ease and simplicity.",
                    title2: "Right? Let’s face it."
                },

                {
                    title: "Get some Instagram love",
                    content: "That’s where Poprey comes in! With our extensive network of valuable services, we make sure your online posts receive numerous interesting and relevant comments, merely at the touch of a single button. It doesn’t matter where you are to buy Instagram comments – US, UK, or a remote island (with cell service of course). It really couldn’t be simpler.",

                },
                {
                    title: "No hassle! No stress! Just lots of\n" +
                        "comments from Instagram!",
                    content: "The process of buying Instagram comments is very simple. Firstly, take a look at our value-packed packages and deals and choose the one that fits your pocket and your goals. You have an option to buy random as well as custom Instagram comments – just pick one on the pop-up window. Then, confirm payment via our secure, encrypted payment gateway and we’ll take care of the rest!"
                },
                {
                    title: "You can do this!",
                    content: "Sit back and watch in absolute awe as Poprey delivers numerous insta\n" +
                        "                                comments to your page.\n" +
                        "                                Watch the number of comments grow – exactly as planned and when you\n" +
                        "                                ordered them!\n" +
                        "                                Last but not least is our excellent guarantee – if you have any\n" +
                        "                                problems,\n" +
                        "                                our dedicated and efficient customer service staff is here to help –\n" +
                        "                                get in touch 24/7!",
                    title2: "It’s really as\n" +
                        "easy as that!",
                    content2: "So don’t wait for your IG competitors to get to us before you! Go\n" +
                        "                                ahead and get cracking\n" +
                        "                                because the clock is ticking – especially when you’re on Instagram.",
                    li1: "Fast delivery",
                    li2: "Efficient results",
                    li3: "No passwords required",
                    li4: "Premium quality",
                    li5: "Affordable prices",
                }

            ]


        }
    }
}

export default BuyInstagramComments;
