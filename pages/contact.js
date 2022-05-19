import React, {useState} from 'react';
import likeStyles from "../styles/BuyInstagramLikes.module.sass";
import {Layer} from "../component/Layer/Layer";
import privacyStyles from "../styles/PrivacyPolicy.module.sass";
import {Box, MenuItem, Modal, TextField, Typography} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import {useRouter} from "next/router";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Head from "next/head";
import useAxios from "../hooks/useAxios";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding:10,
    borderRadius:3,
    boxShadow: 24,
    backgroundColor:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    gap:2

};
const Contact = () => {
    const [email,setEmail]=useState('')
    const [orderId,setOrderId]=useState('')
    const [text,setText]=useState('')
    const axios=useAxios()

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];
    const [currency, setCurrency] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const router =useRouter()
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const sendRequest=async () => {
        try {
            const data = new FormData();
            data.append('email', email)
            data.append('order', orderId)
            data.append('text', text)
            const res = await axios.post('/ticket_send.php',data)
            if (res.status === 200) {
                setOpen(true)
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Layer firstPage={false}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>Tagiamtop | Contact</title>
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
            </Head>
            <Modal
                open={open}
                onClose={()=>setOpen(false)}>
                <Box sx={style} className={privacyStyles.contactModal} >

                     <h1>Thank you!</h1>
                        <p  >Your application has been successfully sent to us</p>
                    <ButtonComponent text="Home page" type="fill" onClick={()=>router.push('/')}/>
                </Box>
            </Modal>

            <div className={likeStyles.header_banner}>
                <p className={likeStyles.header_title}>Contacts Us</p>
                <p className={likeStyles.header_text}>Get in touch with us today, we’d love to hear from you!
                </p>

                <img className={likeStyles.header_arrow} src="/arrow-detail.svg" alt=""/>
            </div>

            <PageTitle title={'Contacts'}/>

            <div className={privacyStyles.privacy_container}>
                <div className={privacyStyles.contactBlock} >
                <span  >
                    <TextField required id="outlined-required" label="Enter your email" variant="outlined" style={{width:'100%'}}
                               sx={{

                                   "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                       borderColor: "#8C66FA"
                                   },
                                   "& .MuiInputLabel-root.Mui-focused": {
                                       color: "#272D4D42"
                                   },
                               }} onChange={(e)=>setEmail(e.target.value)}
                               />


                    <TextField id="outlined-basic" label="Order id" variant="outlined" style={{ width:'100%'}}
                               sx={{

                                   "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                       borderColor: "#8C66FA"
                                   },
                                   "& .MuiInputLabel-root.Mui-focused": {
                                       color: "#272D4D42"
                                   },
                               }} onChange={(e)=>setOrderId(e.target.value)}/>
                </span>
                <TextField
                    id="outlined-multiline-static"
                    label="Enter your message"
                    multiline
                    rows={5}
                    style={{width:'100%'}}
                    sx={{

                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#8C66FA"
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#272D4D42"
                        },
                    }} onChange={(e)=>setText(e.target.value)}
                />
                <span  className={privacyStyles.buttons}>

                    <ButtonComponent text="Send Message" type="fill" onClick={sendRequest}/>
                </span>

            </div>
            </div>
        </Layer>
    );
};

export default Contact;
