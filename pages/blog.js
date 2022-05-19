import React, {useState} from 'react';
import styles from "../styles/BuyInstagramLikes.module.sass";
import homeStyles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import BlogItem from "../component/BlogItem";
import PaginationButton from "../component/PaginationButton";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import {useRouter} from "next/router";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Head from "next/head";

const Blog = () => {
    const router=useRouter()
    const [currentPage,setCurrentPage]=useState(1)
    const [nextPages,setNextPages]=useState([1,2,3])
    const pages =[]
    for (let i = 1; i < 13; i++) {
        pages.push(i)
    }
    const increaseNextPages=()=>{
        if (nextPages[2]!==pages[pages.length-1]){
        const massive=nextPages.map(num=>num+1)
        setNextPages(massive)
            setCurrentPage(nextPages[1])
        }
    }
    const incrementNextPages=()=>{
        if (nextPages[0]!==1){
            const massive=nextPages.map(num=>num-1)
            setNextPages(massive)
            setCurrentPage(nextPages[1])
        }
    }
    return (
        <Layer firstPage={false}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>Tagiamtop | Blog</title>
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
            </Head>
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Blog <img src="/buyfollowerfull.svg" width={50} height={40}/></p>
                <p className={styles.header_text}>At tagiamtop, you can buy Instagram likes quickly, safely and easily
                    with just a few clicks. See our deals below!</p>

                <img className={styles.header_arrow} src="/arrow-detail.svg" alt=""/>
            </div>

            <PageTitle title={'Blog'}/>

             <BlogItem img="/blogphoto1.png" text="Get Followers Instagram 2022: Comlete Guide" onClick={()=>router.push(`${router.pathname}/get-followers-instagram-guide`)}/>
            <BlogItem img="/blogphoto2.png" text="Use Your Instagram Stories To Get More Followers - 7 Ways To Improve Your Stories" onClick={()=>router.push(`${router.pathname}/use-your-instagram-stories-to-get-more-followers`)}/>
            <BlogItem img="/blogphoto1.png" text="Get Followers Instagram 2022: Comlete Guide"  onClick={()=>router.push(`${router.pathname}/get-followers-instagram-guide`)}/>
            <BlogItem img="/blogphoto2.png" text="Use Your Instagram Stories To Get More Followers - 7 Ways To Improve Your Stories"  onClick={()=>router.push(`${router.pathname}/use-your-instagram-stories-to-get-more-followers`)}/>

            <div style={{display:'flex',flexDirection:'row',padding:60,alignItems:'center',justifyContent:'center'}}>
                <ButtonComponent text={<img src="/paginationarrowleft.svg"/>} type="outline" style={{display: "flex",
                    borderRadius: "5px",
                    width: "40px",
                    height: "40px",
                    padding:0,
                    color:'black',
                    border:"1px solid #8C66FA",
                    marginRight: "10px",
                    justifyContent: "center",
                    alignItems: "center"}} onClick={()=>currentPage!==nextPages[0]?setCurrentPage(currentPage-1):incrementNextPages()}/>
                {
                    nextPages.map((num,index)=>{

                            return (
                                <ButtonComponent key={index} text={num} type="fill" style={{
                                    display: "flex",
                                    borderRadius: "5px",
                                    width: "40px",
                                    height: "40px",
                                    padding: 0,
                                    backgroundColor: currentPage === num ? "#E64652" : "white",
                                    color: currentPage === num ? "white" : "black",
                                    marginRight: "10px",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }} onClick={() => setCurrentPage(num)}/>
                            )
                        })
                }
                <ButtonComponent text="..." type="fill" style={{
                    display: "flex",
                    borderRadius: "5px",
                    width: "40px",
                    height: "40px",
                    padding: 0,
                    backgroundColor:  "white",
                    color: "black",
                    marginRight: "10px",
                    justifyContent: "center",
                    alignItems: "center"
                }}  onClick={increaseNextPages}/>
                {
                    !nextPages.includes(pages[pages.length-1])&&

                <ButtonComponent text={pages[pages.length-1]} type="fill" style={{
                    display: "flex",
                    borderRadius: "5px",
                    width: "40px",
                    height: "40px",
                    padding: 0,
                    backgroundColor: currentPage === pages[pages.length-1] ? "#E64652" : "white",
                    color: currentPage === pages[pages.length-1] ? "white" : "black",
                    marginRight: "10px",
                    justifyContent: "center",
                    alignItems: "center"
                }}  onClick={() => setCurrentPage(pages[pages.length-1])}/>}
                <ButtonComponent text={<img src="/paginationarrowright.svg"/>} type="fill" style={{display: "flex",
                    borderRadius: "5px",
                    width: "40px",
                    height: "40px",
                    padding:0,
                    backgroundColor:"#8C66FA",
                    marginRight: "10px",
                    justifyContent: "center",
                    alignItems: "center"}} onClick={()=>currentPage!==nextPages[2]?setCurrentPage(currentPage+1):increaseNextPages()}/>


            </div>
        </Layer>
    );
};

export default Blog;
