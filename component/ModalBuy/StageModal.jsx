import React from 'react';
import styles from "./ModalBuy.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";

const StageModal = ({stage,setOpen,open}) => {
    return (
        <div onClick={setOpen}>
            <div className={styles.stageModal} style={{padding:0,gap:0}}>
            <div className={styles.stageModal_container}>
                 <img src={`/stagebanner.png`} width="100%" height="100%"/>
                {/*<img src={`/${stage}stagesLeft.png`} className={styles.stageModal_number}/>*/}

                    <p className={styles.stageModal_number}>{stage}<br/>
                        <p>stages left</p>
                    </p>



            </div>
                <ButtonComponent text={<p style={{display:'flex',flexDirection:'row',width:"100%",justifyContent:'space-between'}}>Next step {stage===1?"finish":stage-1} <img src="/stepArrow.svg"/></p>} type="fill"
                style={{maxWidth:300,width:"100%",marginTop:30}} onClick={setOpen}
                />
            </div>
        </div>
    );
};

export default StageModal;
