import React from 'react';
import styles from "../styles/BuyInstagramLikes.module.sass";
import {Layer} from "../component/Layer/Layer";
import homeStyles from "../styles/Home.module.sass";
import loginStyles from "../styles/Login.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import {useRouter} from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
const Login = () => {
    const router=useRouter()
    return (
        // <Layer firstPage={false}>
        //     <div className={loginStyles.loginBg}>
        //         <div style={{borderRadius:5,border:"2px solid #8C66FA",display:'flex',padding:50,flexDirection:'column',textAlign:'center',gap:20,backgroundColor:'white'  }}>
        //             <p className={homeStyles.info_title}>My Account</p>
        //             <p className={homeStyles.info_text}>Log in to manage your account. Use the credentials that<br/> you entered during checkout.
        //             </p>
        //              <input className={loginStyles.inputLogin} placeholder="Email"/>
        //              <input className={loginStyles.inputLogin} placeholder="NIckname"/>
        //             <ReCAPTCHA sitekey="Your client site key"/>
        //                 <ButtonComponent text="Sign In" type="fill" onClick={()=>router.push('/')}/>
        //
        //         </div>
        //     </div>
        // </Layer>
        //
        // <Layer firstPage={false}>
        //     <div className={loginStyles.loginBg}>
        //         <div style={{borderRadius:5,border:"2px solid #8C66FA",display:'flex',padding:100,flexDirection:'column',gap:20,backgroundColor:'white',width:800,height:700}}>
        //
        //             <p className={homeStyles.info_title} style={{textAlign:'center'}}>Instagram account</p>
        //             <p className={homeStyles.info_text} style={{display:'flex',justifyContent:'center',gap:10,fontWeight:500,fontSize:"28px"}}  ><p style={{color:"#8C66FA" }}>100 Likes</p> $0.99
        //             </p>
        //
        //             <span>
        //                 <p>Instagram username (Login)</p>
        //             <input className={loginStyles.inputLogin} placeholder="Username"/>
        //             </span>
        //
        //             <span>
        //                 <p>Your email</p>
        //             <input className={loginStyles.inputLogin} placeholder="Email"/>
        //             </span>
        //
        //             <ButtonComponent text="Select account" type="outline" onClick={()=>router.push('/')}/>
        //             <ButtonComponent text="Change Packege" type="fill" onClick={()=>router.push('/')}/>
        //         </div>
        //     </div>
        // </Layer>
        <Layer firstPage={false}>
            <div className={loginStyles.loginBg}>

                <div className={loginStyles.login_container}>
                    <div style={{maxWidth: '500px', width: '100%', gap:20,display:'flex',flexDirection:'column' }}>

                        <p className={homeStyles.info_title} style={{textAlign:'center'}}>My account</p>
                        <p className={homeStyles.info_text} style={{textAlign:'center'}}  >
                            Log in to manage your account. Use the creadentials that you entered suring checkout.
                        </p>


                        <div className={loginStyles.input_container}>
                            <input className={loginStyles.inputLogin} placeholder="Email"/>
                            <img src="/mail.svg" alt=""/>
                            <div />
                        </div>

                        <div className={loginStyles.input_container}>
                            <input className={loginStyles.inputLogin} placeholder="Password"/>
                            <img src="/pass.svg" alt=""/>
                            <div />
                        </div>

                        <ReCAPTCHA sitekey="Your client site key" />
                        <ButtonComponent text="Sign In" type="fill" onClick={()=>router.push('/')}/>
                        <a style={{textDecoration:"underline",color:'#E64652',fontWeight:500,display:'flex',justifyContent:'center',cursor:'pointer'}} onClick={()=>router.push(`${router.pathname}/ForgotPassword`)}>Forgot Password?</a>
                    </div>
                </div>
            </div>
        </Layer>

    );
};

export default Login;
