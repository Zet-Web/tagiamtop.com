import React, {useContext, useEffect, useState} from 'react';
import {
    Box,
    Input,
    Modal,
    TextField,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import styles from "./ModalBuy.module.sass";
import homeStyles from "../../styles/Home.module.sass";
import {useRouter} from "next/router";
import loginStyles from "../../styles/Login.module.sass";
import ChildModal1 from "./ChildModal1";
import StageModal from "./StageModal";
import {ModalComponent} from "../Modal/ModalComponent";
import AddAccount from "./AddAccount";
import Stage3 from "./Stage3";
import useAxios from "../../hooks/useAxios";
import {MeContext} from "../../pages/_app";
import {BarLoader, CircleLoader, ClipLoader, DotLoader, PulseLoader, RingLoader} from "react-spinners";
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ModalBuy = ({
                      open,
                      setOpen,
                      amount,
                      times,
                      autoLike,
                      service,
                      count,
                      tarifs,
                      setCounts,
                      setService,
                      setAmount
                  }) => {
    const router = useRouter()
    const axios = useAxios()
    const {allInfo} = useContext(MeContext)
    const [pageActive, setPageActive] = useState(1);
    const [stageOpen, setStageOpen] = useState(true)
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [sendCheck, setSendCheck] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [activePost, setActivePost] = useState([])
    const [result, setResult] = useState({});
    const [type, setType] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const getPosts = async () => {

        if (!userName || !userEmail) return setError(true)
        if (service === 'Followers'){
            await sendOrder()
        }
        try {
            setIsLoading(true)
            const data = new FormData();
            data.append('system', 'Instagram')
            data.append('service', service)
            data.append('count', count)
            data.append('username', userName)
            const res = axios.post(`/get_posts_v2.php`, data)

            res.then((e) => {
                if (e?.data?.result === "Ok") {
                    setUserInfo(prev => e?.data?.data)
                    setType(prev => e?.data?.data?.plan?.types?.t1)
                    setPageActive(2)
                }
                setErrorMessage(e?.data?.text)
            })
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
            data.append('service', service)
            data.append('type', type.name === userInfo?.plan?.types?.t1?.name ? 't1' : 't2')
            data.append('count', count)
            data.append('username', userName)
            if (service !== 'Followers') {
                for (let i = 0; i < activePost.length; i++) {
                    data.append(`url[${i}]`, activePost[i].link)
                }
                for (let i = 0; i < activePost.length; i++) {
                    data.append(`img[${i}]`, activePost[i].img)
                }
            }

            const res = axios.post(`${amount === '0.00' ? '/create_test_order_v2.php' : '/create_order_v2.php'}`, data)
            res.then((e) => {
                if (e?.data?.result === 'Ok') {
                    setResult(prev => e?.data)
                    if (amount === '0.00') {
                        router.push("/SuccessPurchase", "/success-purchase")
                    } else {
                        setPageActive(4)
                    }

                    console.log(e?.data)
                }
                setErrorMessage(e?.data?.text)
            })
            console.log(res)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Modal open={open} setOpen={setOpen} onClose={() => setOpen(false)}>
            <div>
                {/*{pageActive === 1 && <StageModal stage={3} setOpen={() => setPageActive(2)} open={stageOpen}/>}*/}

                {pageActive === 1 && <div className={styles.modalBuy_container}
                                          style={{height: "calc(100% - 30px)", overflowY: 'scroll',overflowX:'hidden' }}>
                    <div style={{maxHeight:"calc(100%-10px)",height:"100%",display:'flex',flexDirection:'column',alignItems:'center',gap:30,width:'100%' }}>
                    <img className={styles.close} src="/closegrey.svg" onClick={() => setOpen(false)}/>
                    {autoLike ?
                        <p className={styles.modalBuy_title}>Only 3 Steps</p> :

                        <p className={styles.modalBuy_title}><p
                            style={{color: '#E64652'}}></p>Only 3 Steps</p>}

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
                                className={homeStyles.question_div}

                            >
                                    <div className={loginStyles.input_container}
                                         style={{width: "100%", borderColor: 'transparent',padding: "20px 20px 20px 60px"}}>
                                    <span   style={{ display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center'}}
                                    ><p>{count} Instagram {service}</p>
                                    <p >{amount}$</p>
                                    </span>
                                        <img src="/heartmodal.svg" alt="" style={{left: 5}}/>
                                        <div style={{left: 45}}/>
                                    </div>


                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.tarifs_container}>
                                {tarifs.map(tarif => <p key={tarif.price} className={loginStyles.tarifP}
                                                         onClick={() => {
                                                             setCounts(tarif.count)
                                                             setAmount(tarif.price)
                                                         }
                                                         }
                                ><p>{tarif.count} Instagram {service}</p><p>{tarif?.price}$</p></p>)}</div>
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

                        <ButtonComponent text={"Start"} type="fill" onClick={() => getPosts()}
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
                                <img src="q&a.png" width={65}/>
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
                                    <img src="icon.png" width={45}/>
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
                                <img src="q&a.png" width={65}/>
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
                                    <img src="icon.png" width={45}/>
                                </div>
                            </div>
                        </div>
                        <img src="/logo.svg" alt="" width={230} style={{margin:"auto",marginTop:30}} />
                    </div>

                    </div>
                </div>}

                {pageActive === 2 && <ChildModal1 setPageActive={setPageActive} pageActive={pageActive} setOpen={setOpen} userInfo={userInfo}
                                                  userEmail={userEmail} setUserEmail={setUserEmail}/>}

                {/*{pageActive === 4 && <StageModal stage={2} setOpen={() => setPageActive(5)} open={stageOpen}/>}*/}

                {pageActive === 3 &&
                    <AddAccount setType={setType} type={type} setPageActive={setPageActive} count={count}
                                setOpen={setOpen} userInfo={userInfo} setActivePost={setActivePost}
                                activePost={activePost} sendOrder={sendOrder} setLoading={setIsLoading}
                                isLoading={isLoading} errorMessage={errorMessage} service={service}/>}

                {/*{pageActive === 6 && <StageModal stage={1} setOpen={() => setPageActive(7)} open={stageOpen}/>}*/}

                {pageActive === 4 && <Stage3 setOpen={setOpen} result={result} price={amount}/>}


            </div>
        </Modal>


    );
};

export default ModalBuy;
