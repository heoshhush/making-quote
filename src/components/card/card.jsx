import React from 'react';
import Styles from './card.module.css';

const Card = ({card, key}) => {
    return(
        <div>
            Card
            <div className={Styles.cardText}>
                <div className={Styles.quote}></div>
                <div className={Styles.author}></div>
            </div>

            <img className={Styles.img} src="heo" alt="img"/>
        </div>
    )
}

export default Card;