import React, { useRef } from 'react';
import Styles from './cardEditForm.module.css'

const CardEditForm = ({card, key}) => {
    const fileInputRef = useRef();

    const clickFileInput = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }


    return (
        <div className={Styles.cardEditForm}>
            <form className={Styles.form}>
                <div className={Styles.firstLine}>
                    <input className={Styles.author} name="author" type="text" value={card.author}/>
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
                <textarea className={Styles.quote} name="quote"cols="30" rows="10" value={card.quote}>
                    
                </textarea>
                <button className={Styles.addBtn} name="addBtn">Add</button>
                
                

            </form>
        </div>
    )
}

export default CardEditForm;