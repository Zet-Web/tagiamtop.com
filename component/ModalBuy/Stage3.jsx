import React, {useContext} from 'react';
import styles from "./ModalBuy.module.sass";
import {useRouter} from "next/router";
import {MeContext} from "../../pages/_app";
import Link from "next/link";

const Stage3 = ({setOpen,amount,autoLike,sendOrder, price, result}) => {

    const {allInfo} = useContext(MeContext)
    const payType = {
        'Coinbase':'/bitcoin.svg',
        'Visa':'/visa.svg',
        'Mastercard':'/mastercard.svg',
        'BitPay':'/bitpay.svg'

    }
    const router=useRouter()

    return (
        <div className={styles.modalBuy_container}>
            <img className={styles.close} src="/closegrey.svg" onClick={() => setOpen(false)}/>
            {
                autoLike? <p className={styles.modalBuy_title}>Instagram {amount} autolikes per post</p>:
                    <p className={styles.modalBuy_title}>{allInfo?.sym_b}{price}{!allInfo?.sym_b ? allInfo?.sym_a : ''}</p>

            }

            <span style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <img className={styles.line} src="/modalline.svg"/>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652'}}>
                    1
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652', color: 'white'}}>
                    2
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652', color: 'white'}}>
                    3
                    </p>
                </span>
                <p style={{fontWeight:'bold'}}>Payment method</p>


            <div className={styles.stage3_container}>
                {result?.data?.methods?.map((item) => <div key={item?.url_to_pay} className={styles.payment_block} onClick={() => router.push(item?.url_to_pay)}>
                    <img src={payType[item?.name]} width={65} height={65} />
                    <span>
                        <p>{item?.name}</p>
                        <p style={{display:'flex',justifyContent:'space-between'}}>
                            <p style={{color:"#00831D"}}>+ {allInfo?.sym_b}{item?.price_local}{!allInfo?.sym_b ? allInfo?.sym_a : ''}</p>
                            {item?.tax !== 0 && <p style={{color:"#C4C4C4"}}>+ {item?.tax}% Vat</p>}
                        </p>
                    </span>
                    <p className={styles.account_check} style={{backgroundColor:"#00831D1A",color:"#00831D"}}>
                        {item?.discount}%
                    </p>
                </div>)}
            </div>
           {/* <div style={{display:'flex',gap:20}} >
                <ButtonComponent text="Choose payment method for $5" type='fill' onClick={()=>{
                    sendOrder()
                }}/>
                <img src="/basket.svg"  />
            </div>*/}
            <p style={{color:'#A4A4A4'}}>By pershing you agree with <Link href="/terms"><a style={{textDecoration:"underline"}} > rules</a></Link></p>


        </div>
    );
}

export default Stage3;
