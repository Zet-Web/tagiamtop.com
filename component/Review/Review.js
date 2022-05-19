import React, {useState} from 'react';
import ReactStars from "react-stars";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import styles from '/styles/Home.module.sass'
import useAxios from "../../hooks/useAxios";

const Review = ({service}) => {

    const axios = useAxios()

    const [name, setName] = useState('');
    const [textComment, setTextComment] = useState('');
    const [stare, setStare] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const addComment = async(e) => {
        e.preventDefault();
        try{
            const data = new FormData();
            data.append('system', 'Instagram')
            data.append('service', service)
            data.append('star', stare)
            data.append('name', name)
            data.append('text', textComment)
            const res = await axios.post(`/review_send.php`, data)
            if (res.data.result === 'Ok'){
                setName('')
                setTextComment('')
                setEmail('')
                setStare(5)
                setSuccessMessage("Sended!")
            }
            setErrorMessage(res?.data?.text)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <form className={styles.review_container} onSubmit={(e) => addComment(e)}>
                <p className={styles.review_title}>Submit Your Review</p>
                <div style={{maxWidth:'1400px',width:"100%"}}>
                    <p  >Enter your name</p>
                    <input className={styles.review_input_default} required={true} value={name} onChange={(e) => setName(prev => e.target.value)}/>
                </div>

                <div style={{alignSelf:'flex-start',maxWidth:'1400px',width:"100%"}}>
                    <p >Rate it</p>
                    <ReactStars
                        value={stare}
                        count={5}
                        size={40}
                        onChange={(e) => setStare(e)}
                        half={false}
                        color2={'#ffd700'}/>
                </div>
                <div style={{alignSelf:'flex-start',maxWidth:'1400px',width:"100%"}}>
                    <p  >Write your review</p>
                    <textarea className={styles.review_input_note} required={true} value={textComment} onChange={(e) => setTextComment(prev => e.target.value)}/>
                </div>
                <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>
                <p style={{color:"green",textAlign:'center'}}>{successMessage}</p>
                <ButtonComponent typeInput='submit' text="Post a review" type="fill"  />
        </form>
    );
};

export default Review;
