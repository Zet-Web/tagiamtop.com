import React from 'react';
import styles from "../styles/BuyInstagramLikes.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import {Layer} from "../component/Layer/Layer";
import {useRouter} from "next/router";
import purchaseStyles from "../styles/Purchase.module.sass"
const ErrorPurchase = () => {
    const router=useRouter()
    return (
        <Layer firstPage={false}>
            <div className={styles.header_banner_full}  style={{background: "url('/errorbg.jpg') no-repeat 100%",backgroundSize:'cover'}} >
                <div className={`container ${styles.header_banner_inst}`} >

                    <p className={purchaseStyles.purchaseErrorTitle}>PAYMENT <span style={{color:'red'}}>ERROR</span></p>
                    <p className={purchaseStyles.purchaseErrorText}  >For now, we have not received your payment.
                        But it may come to our account with time. Please check your email address for a letter saying whether we have received your payment.
                        After this, your order will be realized according to its description.
                        If not - please, write to our support. Thank you for staying witth us!</p>

                    <ButtonComponent text="Home page" type="fill" onClick={()=>router.push('/')}/>
                    <ButtonComponent text="Home page" type="fill" onClick={()=>router.push('SuccessPurchase')}/>
                </div>
            </div>
        </Layer>
    );
};

export default ErrorPurchase;
