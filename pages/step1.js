/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, {useContext, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import useAxios from "../hooks/useAxios";
import {MeContext} from "./_app";
import {Accordion, AccordionDetails, AccordionSummary, Modal} from "@mui/material";
import styles from "../component/ModalBuy/ModalBuy.module.sass";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import homeStyles from "../styles/Home.module.sass";
import loginStyles from "../styles/Login.module.sass";
import CheckIcon from "@mui/icons-material/Check";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import ChildModal1 from "../component/ModalBuy/ChildModal1";
import AddAccount from "../component/ModalBuy/AddAccount";
import Stage3 from "../component/ModalBuy/Stage3";
import { Layer } from "../component/Layer/Layer";
import { ModalSceleton } from "./../component/Modal/ModalSceleton";

const Step1 = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const {query} = useRouter()
  const axios = useAxios()
  const [pageActive, setPageActive] = useState(1);
  const {price, allInfo,userInfo,setUserInfo,result,setResult,type, setType,url, setUrl} = useContext(MeContext)
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [sendCheck, setSendCheck] = useState(false);
  const [activePost, setActivePost] = useState([])
  const [counts, setCounts] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSkeleton, setIsSkeleton] = useState(true);

  useEffect(() => {
    setPriceValue(query.priceValue)
    setCounts(query.counts)
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsSkeleton(false);
    }, 1200);
    return () => clearTimeout(delay)
  }, []);
  
  const getPosts = async () => {
      if (!userName || !userEmail) return setError(true)
      if (query.service === 'Followers'){
          await sendOrder()
      }
      try {
          setIsLoading(true)
          const data = new FormData();
          data.append('system', 'Instagram')
          data.append('service', query.service)
          data.append('count', counts)
          data.append('username', userName)
          if(query.service !== 'Followers'){
          const res = axios.post(`/get_posts_v2.php`, data)
          res.then((e) => {
              if (e?.data?.result === "Ok") {
                  setUserInfo(prev => e?.data?.data)
                  setType(prev => e?.data?.data?.plan?.types?.t1)
                  router.push({
                      pathname:`/step2`,
                      query:{service:query.service,counts:counts,priceValue:priceValue,userName:userName,userEmail:userEmail},
                  })
              }
              setErrorMessage(e?.data?.text)
          })}
      } catch (e) {
          console.log(e)
      } finally {
          setIsLoading(false)
      }
  }

  const sendOrder = async () => {
      setIsLoading(true)
      try {
          const data = new FormData();
          data.append('email', userEmail)
          data.append('system', 'Instagram')
          data.append('service', query.service)
          data.append('type', type.name === userInfo?.plan?.types?.t1?.name ? 't1' : 't2')
          data.append('count', counts)
          data.append('username', userName)
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

      } catch (e) {
          console.log(e)
      } finally {
          setIsLoading(false)
      }
  }

  return (
    <Layer firstPage={false}>
        <Modal open={true} >
        <div className={styles.modalBuy_container} style={{ height: "calc(100% - 30px)", overflowY: 'scroll', overflowX: 'hidden', position: 'relative' }}>
        {isSkeleton && <ModalSceleton />}
                <div style={{ filter: `${isSkeleton ? 'blur(8px)' : 'blur(0px)'}`, maxHeight: "calc(100%-10px)", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, width: '100%', height: '100%' }}>
                    <img className={styles.close} src="/closegrey.svg" onClick={() => router.push(url)}/>
                          {query.autoLike
                            ?
                            <p className={styles.modalBuy_title}>Only 3 Steps</p>
                            :
                            <p className={styles.modalBuy_title}><p style={{color: '#E64652'}}></p>Only 3 Steps</p>}

                            <span style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                                <img className={styles.line} src="/modalline.svg"/>
                                <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652'}}>
                                    1
                                </p>
                                <p className={styles.modalBuy_stage}
                                    style={{backgroundColor: '#F0F0F0', color: 'black'}}>
                                    2
                                </p>
                                    <p className={styles.modalBuy_stage}
                                        style={{backgroundColor: '#F0F0F0', color: 'black'}}>
                                    3
                                    </p>
                              </span>
                          <div style={{width: "100%"}}>
                            <p style={{marginBottom: 10}}>Number Instagram Likes</p>
                            <Accordion sx={{
                                border: `1px solid #272D4D42`,
                                '&:not(:last-child)': {
                                    borderBottom: 0,
                                }
                            }} >
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    expandIcon={<ExpandMoreIcon/>}
                                    className={homeStyles.question_div}>
                                    <div className={loginStyles.input_container}
                                          style={{width: "100%", borderColor: 'transparent',padding: "20px 20px 20px 60px"}}>
                                    <span   style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center'}}
                                    ><p>{counts} Instagram {query.service}</p>
                                    <p >{priceValue}$</p>
                                    </span>
                                        <img src="/heartmodal.svg" alt="" style={{left: 5}}/>
                                        <div style={{left: 45}}/>
                                    </div>


                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className={styles.tarifs_container}>
                                        {price[query.service]?.plans.map(tarif => <p key={tarif.price} className={loginStyles.tarifP}
                                                                onClick={() => {
                                                                    setCounts(tarif.count)
                                                                    setPriceValue(tarif.price)
                                                                }
                                                                }
                                        ><p>{tarif.count} Instagram {query.service}</p><p>{tarif?.price}$</p></p>)}</div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div style={{width: "100%"}}>
                            <p style={{marginBottom: 10}}>Instagram username (Login)</p>
                            <div className={loginStyles.input_container}>
                                <input className={loginStyles.inputLogin} placeholder="Username"
                                        value={userName} onChange={(e) => setUserName(prev => e.target.value)}/>
                                <img src="/login.svg" alt=""/>
                                <div/>
                            </div>
                        </div>

                        <div style={{width: "100%"}}>
                            <p style={{marginBottom: 10}}>Your email</p>
                            <div className={loginStyles.input_container}>
                                <input className={loginStyles.inputLogin} placeholder="Email"
                                        value={userEmail} onChange={(e) => setUserEmail(prev => e.target.value)}/>
                                <img src="/mail.svg" alt=""/>
                                <div/>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', gap: 10, marginTop: 10}}>
                                <div style={{
                                    border: "1px solid #C4C4C4",
                                    borderRadius: 5,
                                    width: 22,
                                    height: 22,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                      onClick={() => setSendCheck(!sendCheck)}
                                >{sendCheck && <CheckIcon style={{fontSize: 20}}/>} </div>
                                <p>Send me special promotions and discounts</p></div>
                        </div>

                        <p style={{color: 'red', textAlign: 'center'}}>{errorMessage}</p>

                        <ButtonComponent text={isLoading?"loading":"Start"} type="fill" onClick={() =>
                            query.service==='Followers'?sendOrder():getPosts()}
                                          style={{padding: "20px 60px 20px 60px"}}/>

                        <p  className={styles.modalBuy_title}  >Q&A from our company</p>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                            paddingBottom:50,

                            width: "100%"
                        }}>
                            <div style={{display: 'flex', gap: 20}}>
                                <div style={{
                                    width: 68,
                                    height: 68,
                                    borderRadius: 75,
                                    borderColor: 'red',
                                    borderWidth: 2,
                                    borderStyle: 'solid'
                                }}>
                                    <img src="/q&a.png" width={65}/>
                                </div>
                                <p style={{
                                    backgroundColor: "rgba(246, 245, 255, 1)",
                                    border: "2px dashed #C9C2FD",
                                    borderRadius: 10,
                                    padding: 20,
                                    borderTopLeftRadius: 0
                                }}>
                                    Why should I purchase Instagram services by TagIamTop?
                                </p>
                            </div>
                            <div style={{display: 'flex', gap: 20, justifyContent: 'space-between', width: '100%'}}>
                                <div/>
                                <div style={{display: 'flex', gap: 20}}>

                                    <p style={{
                                        backgroundColor: "rgba(246, 245, 255, 1)",
                                        border: "2px dashed #C9C2FD",
                                        borderRadius: 10,
                                        padding: 20,
                                        borderTopRightRadius: 0,
                                        maxWidth: 700,
                                        width: "100%"
                                    }}>
                                        We have different packages of likes, views, and followers that can enhance your
                                        engagement, make people see your profile, and increase your popularity.
                                    </p>
                                    <div style={{
                                        maxWidth: 68,
                                        width: "100%",
                                        height: 68,
                                        borderRadius: 75,
                                        borderColor: 'red',
                                        borderWidth: 2,
                                        borderStyle: 'solid',
                                        backgroundColor: "rgba(246, 245, 255, 1)",
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <img src="/icon.png" width={45}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: 'flex', gap: 20}}>
                                <div style={{
                                    width: 68,
                                    height: 68,
                                    borderRadius: 75,
                                    borderColor: 'red',
                                    borderWidth: 2,
                                    borderStyle: 'solid'
                                }}>
                                    <img src="/q&a.png" width={65}/>
                                </div>
                                <p style={{
                                    backgroundColor: "rgba(246, 245, 255, 1)",
                                    border: "2px dashed #C9C2FD",
                                    borderRadius: 10,
                                    padding: 20,
                                    borderTopLeftRadius: 0
                                }}>
                                    How?
                                </p>
                            </div>
                            <div style={{display: 'flex', gap: 20, justifyContent: 'space-between', width: '100%'}}>
                                <div/>
                                <div style={{display: 'flex', gap: 20}}>

                                    <p style={{
                                        backgroundColor: "rgba(246, 245, 255, 1)",
                                        border: "2px dashed #C9C2FD",
                                        borderRadius: 10,
                                        padding: 20,
                                        borderTopRightRadius: 0,
                                        maxWidth: 700,
                                        width: "100%"
                                    }}>
                                        We only recommend you to follow for hashtags that can attract attention of other
                                        users. We do the rest. We make sure that there will be active engagement on your
                                        profile and encourage others to like, view, follow you, or comment on your posts. .
                                    </p>
                                    <div style={{
                                        maxWidth: 68,
                                        width: "100%",
                                        height: 68,
                                        borderRadius: 75,
                                        borderColor: 'red',
                                        borderWidth: 2,
                                        borderStyle: 'solid',
                                        backgroundColor: "rgba(246, 245, 255, 1)",
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <img src="/icon.png" width={45}/>
                                    </div>
                                </div>
                            </div>
                            <img src="/logo.svg" alt="" width={230} style={{margin:"auto",marginTop:30}} />
                        </div>

                    </div>
                </div>
        </Modal>
    </Layer>
  );
};

export default Step1;
