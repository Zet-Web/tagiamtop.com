import React from 'react';
import {Layer} from "../../component/Layer/Layer";
import loginStyles from "../../styles/Login.module.sass";
import styles1 from "../../styles/Home.module.sass";
import ReCAPTCHA from "react-google-recaptcha";
import {ButtonComponent} from "../../component/ButtonComponent/ButtonComponent";

const ForgotPassword = () => {
    return (
        <Layer firstPage={false}>
            <div className={loginStyles.loginBg}>

                <div style={{borderRadius:5,border:"2px solid #8C66FA",display:'flex',padding:80,flexDirection:'column',gap:20,backgroundColor:'white'}}>

                    <p className={styles1.info_title} style={{textAlign:'center'}}>Forgot passwoed</p>
                    <p className={styles1.info_text} style={{textAlign:'center'}}  >
                        Enter your email to reset your password
                    </p>


                        <p>Your email</p>
                    <input className={loginStyles.inputLogin} placeholder="Email"/>
                    <ButtonComponent text="Reset my Password" type="fill" onClick={()=>router.push('/')}/>

                </div>
            </div>
        </Layer>
    );
};

export default ForgotPassword;
