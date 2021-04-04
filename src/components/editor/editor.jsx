import React from 'react';
import CardEditForm from '../card-edit-form/cardEditForm';
import Styles from './editor.module.css'

const Editor = ({ cards, keys }) => {
    console.log(keys)
    return(
        <section className={Styles.container}>
        <h1 className={Styles.title}> Edit</h1>
        {keys.map(key => (
            <CardEditForm 
                key = {key}
                card = {cards[key]}
            />
        ))}
    </section>
    )
    }


export default Editor;