import React, { useRef, useState } from 'react';
import Styles from './cardAddForm.module.css'

const CardAddForm = ({updateCard, imageUploader }) => {
    const [fileURL, setFileURL] = useState();
    const [fileName, setFileName] = useState();
    const [loading, setLoading] = useState(false);

    const authorRef = useRef();
    const themeRef = useRef();
    const quoteRef = useRef();
    const fileInputRef = useRef();
    const formRef = useRef();

    const clickFileInput = (event) => {
        event.preventDefault();
        fileInputRef.current.click();
    }

    const onChangeFile = async (event) => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        console.log(uploaded)
        setFileURL(uploaded.url);
        setFileName(uploaded.original_filename);
        setLoading(false);
    }

    const onClick = (event) => {
        event.preventDefault();
        const card ={
            id: Date.now(),
            author: authorRef.current.value,
            quote: quoteRef.current.value,
            theme: themeRef.current.value,
            fileName: fileName || 'No File',
            fileURL: fileURL || 'https://res.cloudinary.com/drhfkpavq/image/upload/v1616651072/samples/animals/cat.jpg',
        }
        updateCard(card)
        formRef.current.reset();
        
    }

        // image file 업로드 할 차례!
        // file 업로드 한 후에 card에 어떻게 반영할래?

    return (


        <div className={Styles.cardAddForm}>
            <form ref={formRef} className={Styles.form}>
                <div className={Styles.firstLine}>
                    <input ref={authorRef} className={Styles.author} name="author" type="text" placeholder="Author"/>
                    <select ref={themeRef} className={Styles.theme}>
                        <option value="white">white</option>
                        <option value="black">black</option>
                        <option value="colorful">colorful</option>
                    </select>
                    <div className={Styles.file}>
                        {loading && <div className={Styles.loading}></div>}
                    <input ref={fileInputRef} className={Styles.fileInput} onChange={onChangeFile} type="file"/>
                    {!loading && <button className={Styles.fileInputBtn} onClick={clickFileInput}> {fileName || 'Upload Img'} </button>}
                </div>
                </div>
                <textarea ref={quoteRef} className={Styles.quote} name="quote"cols="30" rows="10" placeholder="Your Quote">
                    
                </textarea>
                <button className={Styles.addBtn} onClick={onClick} name="addBtn">Add</button>
                
                

            </form>
        </div>
    )
}

export default CardAddForm;