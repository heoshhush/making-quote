import React, { useRef } from 'react';
import Styles from './cardEditForm.module.css'

const CardEditForm = ({card, key, updateCard}) => {
    const fileInputRef = useRef();

    const clickFileInput = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }

    const onChange = (event) => {
        event.preventDefault();
        updateCard({...card, [event.currentTarget.name] : event.currentTarget.value});

    }

    return (
        <div className={Styles.cardEditForm}>
            <form className={Styles.form}>
                <div className={Styles.firstLine}>
                    <input onChange={onChange} className={Styles.author} name="author" type="text" onChange={onChange} value={card.author}/>
                    <select onChange={onChange} className={Styles.theme} name="theme">
                        <option value="white">white</option>
                        <option value="black">black</option>
                        <option value="colorful">colorful</option>
                    </select>
                    <div className={Styles.file}>
                    <input onChange={onChange} ref={fileInputRef} className={Styles.fileInput} name="file" type="file"/>
                    <button className={Styles.fileInputBtn} onClick={clickFileInput}>File</button>
                </div>
                </div>
                <textarea onChange={onChange} className={Styles.quote} name="quote"cols="30" rows="10" value={card.quote}>
                    
                </textarea>
                <button className={Styles.addBtn} name="deleteBtn">Delete</button>
                
                

            </form>
        </div>
    )
}

export default CardEditForm;