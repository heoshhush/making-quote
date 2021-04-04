import React from 'react';
import Styles from './card.module.css';

const Card = ({card, key}) => {
    const {quote, author, theme, fileURL} = card
    
    return(
        <section className={Styles.card}>
            <div className={Styles.cardText}>
                <div className={Styles.quote}>{quote}</div>
                <div className={Styles.author}>- {author}</div>
            </div>

            <img className={Styles.img} src={fileURL || '/images/default_logo.png'} alt="img"/>
        </section>
    )
}

export default Card;