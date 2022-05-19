import styles from '../styles/Home.module.sass'
import {Layer} from "../component/Layer/Layer";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import React, {useEffect, useState} from "react";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import ReactStars from 'react-stars';
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import {useRouter} from "next/router";
import Head from 'next/head';
import FrequentQuestions from "../component/Questions/FrequentQuestions";
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';
import styles1 from "../styles/Home.module.sass";
import useAxios from "../hooks/useAxios";

export default function Home() {

    const [windowInnerWidth, setWindowInnerWidth] = useState(false);
    const router = useRouter()
    const [readMore,setReadMore]=useState(3)
    const [comment, setComment] = useState([]);
    const axios=useAxios()
    const getComment = async () => {
        try {
            const data = new FormData()
            data.append('system', 'Instagram')
            data.append('service', 'Likes')
            const res = await axios.post('/review_list.php', data)
            if (res.status === 200) {
                setComment(prev => res.data.data)
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth)
        getComment()
    }, [])

    return (
      <div className={styles.background} >
        <div style={{margin:"0 auto",overflowX:"hidden"}}>
        <div className={styles.container} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>Tagiamtop</title>
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
            </Head>


                {windowInnerWidth > 760 ? <img src="/phone.png" alt="buy Instagram likes" className={styles.phone}/> :
                    <img src="/phone-mobile.png" alt="buy Instagram likes" className={styles.phone}/>}
        </div>

            <Layer firstPage={true}>
                <div style={{maxWidth:1400,width:"100%",margin:"0 auto"}}>
                  <div className={`container`}>
                      <div className={`${styles.content}`}>
                      <h1><Typewriter
                          string='Grow your online presence with Instagram Followers, Likes and Views'
                          delay={80}
                          stopBlinkinOnComplete
                          cursor=""
                      />
                      </h1>
                          <h2>Real followers, real engagement, real growth. All with tagiamtop</h2>
                          <div>
                              <ButtonComponent text={'Buy Likes'} type={'mainFill'}
                                               onClick={() => router.push('/buy-instagram-likes')}/>
                              <ButtonComponent text={'Buy followers'} type={'mainFill'} onClick={() => router.push('/buy-instagram-followers')}/>
                          </div>
                          <img src="/arrow-detail.svg" alt="" onClick={() => window.scrollTo(0, document.body.scrollHeight)}/>
                      </div>
                </div>
                </div>

              
              <div className={styles.container_work}>
                  <div style={{maxWidth:1400,width:"100%",margin:"0 auto"}}>
                    <div className={`container ${styles.work}`}>
                        <div className={styles.work_box}>
                            <div className={styles.work_title}>
                                <p>How It Works?</p>
                                <span>Make your account stand out through a combination of automated likes and story views, and through buying followers.</span>
                            </div>

                            <div className={styles.work_info}>
                                <div className={styles.info_box}>
                                    <img src="/comp.svg" alt=""/>
                                    <p>Grow organically</p>
                                    <span>Real likes and story views will help you increase your reach and engagement.</span>
                                </div>

                                <div className={styles.info_box}>
                                    <img src="/char.svg" alt=""/>
                                    <p>Smart Targeting</p>
                                    <span>Focus on your target audience based on their interests, location and hashtags.</span>
                                </div>

                                <div className={styles.info_box}>
                                    <img src="/security.svg" alt=""/>
                                    <p>Security first</p>
                                    <span>You'll never have to worry about your account being put at risk, we protect your reputation.</span>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div    data-aos="fade-up" data-aos-duration="1500" data-aos-offset="600" >
                <InfoBlock reverse={false} text={
                    <div     >
                        <p className={styles.info_title}>Instagram Likes  and Auto-likes</p>
                        <p className={styles.info_text}  >Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum  sociis natoque penatibus et magnis dis parturient
                            montes,  nascetur
                            ridiculus mus.
                            Donec quam felis, ultricies nec,  pellentesque eu, pretium quis, sem. Nulla consequat
                            massa
                            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                            justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p></div>
                            }
                           buttons={<><ButtonComponent text="Buy Likes" type={'fill'}
                                                       onClick={() => router.push('/buy-instagram-likes')}/>
                               <ButtonComponent text="Autolikes" type={"outline"}
                                                onClick={() => router.push('/buy-instagram-likes')}/></>}
                           img="/instagramlikesandauto-likes.png" alt={"get Instagram likes"}  fade={true}/>
                </div>
                <div    data-aos="fade-up" data-aos-duration="1500" data-aos-offset="700" >
                <InfoBlock reverse={true}
                           text={
                               <div   >
                                   <p className={styles.info_title}>Instagram Followers</p>
                                   <p className={styles.info_text}>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                       elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                       penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                       felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                       quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                       enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p></div>}
                           buttons={<ButtonComponent text="Buy Followers" type={'fill'}
                                                     onClick={() => router.push('/buy-instagram-followers')}/>}
                           img="/instagramfollowers.png" alt={"get new Instagram followers"}/>
                </div>
                <div    data-aos="fade-up" data-aos-duration="1500" data-aos-offset="1000"  >
                <InfoBlock reverse={false} text={
                    <div   >
                        <p className={styles.info_title}>Instagram Comments</p>
                        <p className={styles.info_text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
                            nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                            justo. </p></div>}
                           buttons={<ButtonComponent text="Buy Comments" type={'fill'}  onClick={() => router.push('/buy-instagram-comments')}/>}
                           img="instagramcomments.png" alt={"get Instagram comments"}/>
                </div>
                <div    data-aos="fade-up" data-aos-duration="1500" data-aos-offset="1200"   ><InfoBlock reverse={true} text={
                    <div   >
                        <p className={styles.info_title}>Instagram View</p>
                        <p className={styles.info_text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
                            nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                            justo. </p></div>} buttons={<ButtonComponent text="Buy Views" type={'fill'} onClick={() => router.push('/buy-instagram-views')}/>}
                           img="instagramview.png" alt={"get Instagram views"} />
                </div>


                <div style={{background: 'url(/bacgraund-works.jpg) no-repeat', backgroundSize: 'cover'}}>
                    <div className={styles.questions}  >
                        <p className={styles.questions_title} style={{marginTop:100}}>Frequently Asked Questions</p>
                        <span className={styles.questions_text}>Have a different question about how Likes.io works or the pricing plans available? Get in touch with one of our specialists.</span>

                        <FrequentQuestions />
                    </div>
                </div>

                <div className={styles.getStartedBanner}>
                    <img src="/buy_banner.png"/>
                    <div >
                        <p className={styles.banner_title}>Get Started</p>
                        <p className={styles.banner_text}>Simply enter your username, select your photos and see the likes
                            come in. No registration or password required!</p>
                        <ButtonComponent text="Buy Started" type="fill" onClick={()=>router.push('/buy-basket-now')}/>
                    </div>

                </div>
                <div className={styles.review_comment_container}  >

                    <div className={styles.review_comment}>
                            <span className={styles.review_comment_title_container}>
                            <p className={styles.review_comment_title}>Rated by 10 reviews  </p>
                            <ReactStars
                                value={5}
                                count={5}
                                size={windowInnerWidth < 445 ? 20 : windowInnerWidth < 620 ? 30 : 50}
                                color2={'#ffd700'}/>
                                </span>
                        <p className={styles.info_text}>Here at Likes.io, we pride ourselves on exceptional service and
                            affordable prices. Don’t just take our word for it – check out our customer reviews below</p>

                        <div className={styles.review_comment_row}>
                            <div className={styles1.comments_container}>
                                {comment?.map((item,index) => index< readMore&& <Comment key={item.name} bg="#E4E0FE" border="2px dashed #D8BFD8" name={item.name} star={item.star} text={item.text}/>)}


                                <p style={{marginTop: 20}}><a style={{color: "#8C66FA", cursor: 'pointer'}} onClick={()=>setReadMore(comment.length)}>Read More
                                    Reviews</a></p>
                            </div>
                            <Review service="Likes"/>
                        </div>
                    </div>
                </div>
            </Layer>
          </div>
          </div>
    )
}
