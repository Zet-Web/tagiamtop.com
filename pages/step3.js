/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, {useContext, useEffect, useState} from 'react';
import {Layer} from "../component/Layer/Layer";
import { Modal} from "@mui/material";
import {MeContext} from "./_app";
import styles from "../component/ModalBuy/ModalBuy.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import CheckIcon from "@mui/icons-material/Check";
import {DotLoader} from "react-spinners";
import {useRouter} from "next/router";
import useAxios from "../hooks/useAxios";
import { ModalSceleton } from "./../component/Modal/ModalSceleton";

const Step3 = (props) => {
    const {allInfo,setResult,userInfo,setUserInfo,url, setUrl,type, setType} = useContext(MeContext)
    const [choose, setChoose] = useState({
        'impressions':false,
        'reach':false,
        'saves':false,
    })
    console.log(props)

    const router = useRouter()
    const {query} = useRouter()
    const axios = useAxios()


    const [errorMessage, setErrorMessage] = useState('');
    const [activePost, setActivePost] = useState([]);
    const [isSkeleton, setIsSkeleton] = useState(true);

    useEffect(() => {
      const delay = setTimeout(() => {
        setIsSkeleton(false);
      }, 1200);
      return () => clearTimeout(delay)
    }, []);

    const [style, setStyle] = useState({
        outline: {
            color: '#3D2977',
            borderColor: "#3D2977",
            borderRadius: 10,
            width: 200,
            height: 75
        },
        fill: {
            backgroundColor: "#3D2977",
            borderRadius: 10,
            shadowColor: "#3D2977",
            width: 200,
            height: 75
        }
    })
    const deleteActivePost=(index)=>{
        const newPost=activePost.filter(post=>post!==index)
        setActivePost(newPost)
    }

    const sendOrder = async () => {
        try {
            const data = new FormData();
            data.append('email', query.userEmail)
            data.append('system', 'Instagram')
            data.append('service', query.service)
            data.append('type', type.name === userInfo?.plan?.types?.t1?.name ? 't1' : 't2')
            data.append('count', query.counts)
            data.append('username', query.userName)
            if (query.service !== 'Followers') {
                for (let i = 0; i < activePost.length; i++) {
                    data.append(`url[${i}]`, activePost[i].link)
                }
                for (let i = 0; i < activePost.length; i++) {
                    data.append(`img[${i}]`, activePost[i].img)
                }
            }

            const res = axios.post(`${query.priceValue === '0.00' ? '/create_test_order_v2.php' : '/create_order_v2.php'}`, data)
            res.then((e) => {
                if (e?.data?.result === 'Ok') {
                    setResult(prev => e?.data)
                    if (query.priceValue === '0.00') {
                        router.push("/SuccessPurchase", "/success-purchase")
                    }else {
                        router.push( {
                            pathname:'/step4',
                            query:{autoLike:false,counts:query.counts,priceValue:query.priceValue,userEmail:query.userEmail, userInfo:userInfo,service:query.service,userName:query.userName}
                        })}
                }

                setErrorMessage(e?.data?.text)
            })
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Layer firstPage={false}>
            <Modal open={true} >
          <div className={styles.modalBuy_container} style={{ height: "calc(100% - 30px)", overflowY: 'scroll', overflowX: 'hidden' }}>
                    {isSkeleton && <ModalSceleton />}
                    <div style={{maxHeight:"calc(100%-10px)",height:"100%",display:'flex',flexDirection:'column',alignItems:'center',gap:30,width:'100%', filter: `${isSkeleton ? 'blur(8px)' : 'blur(0px)'}` }}>
                        <p className={styles.backButton} onClick={() => router.push('/step2')}> {"< Back"} </p>
                        <img className={styles.close} src="/closegrey.svg" onClick={() =>
                            router.push(url)} />
                        <p className={styles.modalBuy_title}>Choose post</p>
                        {
                            !query.autoLike&&
                            <span style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <img className={styles.line} src="/modalline.svg"/>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652'}}>
                    1
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652', color: 'white'}}>
                    2
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#F0F0F0', color: 'black'}}>
                    3
                    </p>
                </span>}
                            <div className={styles.addAccount_block}>
                                {
                                    userInfo?.posts?.map((post,index)=>{
                                        return(
                                            <div key={index} className={`${styles.post} ${activePost.includes(post)?styles.postChosen:''}`} style={{background:`url(${post.img})`,width:100,height:100, backgroundSize: 'cover',borderRadius:5}}
                                                 onClick={()=>
                                                     activePost.includes(post)?
                                                         deleteActivePost(post): activePost.length <= 9 ?
                                                             setActivePost(prev=>([...prev,post])) : null

                                                 }>
                                                {
                                                    activePost.includes(post)&&
                                                    <div style={{background: "rgba(105, 114, 100, 0.3)",width:'100%',height:"100%",position:'relative',borderRadius:5,opacity:10}}>
                                                        <img src="/check.svg" className={styles.postCheck} />
                                                        <p className={styles.postChosenHeart}>
                                                            {query.service==='Likes'?
                                                                <img src="/heart.svg"/>:query.service==='Followers'? <img src="/repost.svg" width={30} height={30}/>:query.service==='Views'? <img src="/view.svg" width={30} height={30}/>:query.service==='Comments'&& <img src="/modalcomment.svg" width={30} height={30}   />}
                                                            {Math.round(query.counts/activePost.length)}
                                                        </p>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        <span style={{display: 'flex', gap: 10}}>
                    <img src="/ellipsered.svg"/>
                    <img src="/ellipsered.svg"/>
                    <img src="/ellipsered.svg"/>
                </span>
                        <div className={styles.addAccount_buttons}>
                            <ButtonComponent text={userInfo?.plan?.types?.t1?.name} style={style[userInfo?.plan?.types?.t1.name === type.name ? 'fill' : 'outline']} type={userInfo?.plan?.types?.t1.name === type.name ? 'fill' : 'outline'} onClick={() => {
                                setType(userInfo?.plan?.types?.t1)
                            }}/>
                            <ButtonComponent text={userInfo?.plan?.types?.t2?.name} disabled={userInfo?.plan?.types?.t2?.name === 'Custom'} style={style[userInfo?.plan?.types?.t2.name === type.name ? 'fill' : 'outline']} type={userInfo?.plan?.types?.t2.name === type.name ? 'fill' : 'outline'} onClick={() => {

                                setType(userInfo?.plan?.types?.t2)

                            }}/>
                        </div>
                        <div className={styles.account_item_block} >
                            <div className={styles.account_item} onClick={()=>setChoose({...choose,impressions: !choose["impressions"] })}>
                        <span style={{display: 'flex', alignItems: 'center'}}>
                            <div className={styles.account_check}>
                                {choose["impressions"]&&<CheckIcon  style={{color:'green'}}/>}
                            </div>
                         <p>+ 500 Impressoins</p>

                    </span>
                                <p style={{color:'red'}}>+ $5.4</p>
                                <img src="/info.svg" style={{width: '22px', height: '22px'}} />
                            </div>
                            <div className={styles.account_item} onClick={()=>setChoose({...choose,reach:!choose["reach"]  })}>
                        <span style={{display: 'flex', alignItems: 'center'}}>
                            <div className={styles.account_check}>
                                 {choose["reach"]&&<CheckIcon  style={{color:'green'}}/>}
                            </div>
                         <p>+ 500 Reach</p>
                    </span>
                                <p style={{color:'red'}}>+ $5.4</p>
                                <img src="/info.svg" style={{width: '22px', height: '22px'}}/>
                            </div>
                            <div className={styles.account_item} onClick={()=>setChoose({...choose,saves: !choose["saves"]})}>
                        <span style={{display: 'flex', alignItems: 'center'}}>
                            <div className={styles.account_check}>
                                 {choose["saves"]&&<CheckIcon   style={{color:'green'}}/>}
                            </div>
                         <p>+ 100 Saves</p>

                    </span>
                                <p style={{color:'red'}}>+ $5.4</p>
                                <img src="/info.svg" style={{width: '22px', height: '22px'}} />
                            </div>
                        </div>
                        <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>
                        <div style={{display:'flex',gap:20}} >

                                <ButtonComponent id="PAY" text={`Choose payment method for ${allInfo?.sym_b}${type.price} ${!allInfo?.sym_b ? allInfo?.sym_a : ''}`} type='fill' onClick={()=>{
                                    sendOrder() }}/>

                             <img src="/basket.svg"  />

                        </div>
                    </div>

                </div>
            </Modal>
        </Layer>
    );
};
// export async function getStaticProps(context) {
//     console.log(context)
//     return {
//         props: { message: `Next.js is awesome` }, // will be passed to the page component as props
//     }
// }
export default Step3;
