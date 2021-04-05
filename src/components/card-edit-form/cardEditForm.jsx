import React, { useRef, useState } from 'react';
import Styles from './cardEditForm.module.css'

const CardEditForm = ({card, updateCard, imageUploader, deleteCard}) => {
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef();


    const clickFileInput = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }

    const onClickDelete = () => {
        deleteCard(card)
    }

    const onChange = (event) => {
        updateCard({...card, [event.currentTarget.name] : event.currentTarget.value});
    }

    const onFileChange = async (event) => {
        setLoading(true);
        const upload = await imageUploader.upload(event.target.files[0])
        updateCard({...card,
            fileName : upload.original_filename,
            fileURL : upload.url});
        setLoading(false);
    }

    return (
        <div className={Styles.cardEditForm}>
            <form className={Styles.form}>
                <div className={Styles.firstLine}>
                    <input onChange={onChange} className={Styles.author} name="author" type="text" value={card.author}/>
                    <select onChange={onChange} className={Styles.theme} value={card.theme} name="theme">
                        <option value="white">white</option>
                        <option value="black">black</option>
                        <option value="colorful">colorful</option>
                    </select>
                    <div className={Styles.file}>
                    {loading && <div className={Styles.loading}></div>}
                    <input onChange={onFileChange} ref={fileInputRef} className={Styles.fileInput} name="file" type="file"/>
                    {!loading && <button className={Styles.fileInputBtn} onClick={clickFileInput}>{card.fileName}</button>}
                </div>
                </div>
                <textarea onChange={onChange} className={Styles.quote} name="quote"cols="30" rows="10" value={card.quote}>
                    
                </textarea>
                <button className={Styles.addBtn} onClick={onClickDelete} ame="deleteBtn">Delete</button>
                
                

            </form>
        </div>
    )
}

export default CardEditForm;