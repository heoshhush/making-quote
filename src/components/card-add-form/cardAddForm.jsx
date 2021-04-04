import React, { useRef } from 'react';
import Styles from './cardAddForm.module.css'

const CardAddForm = (props) => {
    const fileInputRef = useRef();
        
    const clickFileInput = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }

    return (


        <div className={Styles.cardAddForm}>
            <form className={Styles.form}>
                <div className={Styles.firstLine}>
                    <input className={Styles.author} name="author" type="text" placeholder="Author"/>
                    <select className={Styles.theme}>
                        <option value="white">white</option>
                        <option value="black">black</option>
                        <option value="colorful">colorful</option>
                    </select>
                    <div className={Styles.file}>
                    <input ref={fileInputRef} className={Styles.fileInput} type="file"/>
                    <button className={Styles.fileInputBtn} onClick={clickFileInput}>File</button>
                </div>
                </div>
                <textarea className={Styles.quote} name="quote"cols="30" rows="10" placeholder="Your Quote">
                    
                </textarea>
                <button className={Styles.addBtn} name="addBtn">Add</button>
                
                

            </form>
        </div>
    )
}

export default CardAddForm;