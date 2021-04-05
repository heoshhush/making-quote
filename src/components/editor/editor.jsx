import React from 'react';
import CardAddForm from '../card-add-form/cardAddForm';
import CardEditForm from '../card-edit-form/cardEditForm';
import Styles from './editor.module.css'

const Editor = ({ userId, dataBase, cards, keys, updateCard, imageUploader, deleteCard }) => {
    return(
        <section className={Styles.container}>
        <h1 className={Styles.title}> Edit</h1>
        {keys.map(key => (
            <CardEditForm 
                key = {key}
                card = {cards[key]}
                updateCard = {updateCard}
                imageUploader = {imageUploader}
                deleteCard = {deleteCard}
                
            />
        ))}
        <CardAddForm 
            updateCard = {updateCard}
            imageUploader = {imageUploader}
        />
    </section>
    )
    }


export default Editor;