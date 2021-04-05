import React from 'react';
import Styles from './card.module.css';

const Card = ({card}) => {
    const {quote, author, theme, fileURL} = card

    
    return(
        <section className={`${Styles.card} ${getTheme(theme)}`} >
            <div className={Styles.cardText}>
                <div className={Styles.quote}>
                    <pre className={Styles.pre}>{quote}</pre>
                    </div>
                <div className={Styles.author}>- {author}</div>
            </div>

            <img className={Styles.img} src={fileURL || '/images/default_logo.png'} alt="img"/>
        </section>
    )
}

const getTheme = (theme) => {
    switch(theme){
        case 'white':
        return Styles.white
        case 'black':
        return Styles.black
        case 'colorful':
        return Styles.colorful
        default :
        throw new Error(`undefined theme : ${theme}`)
    }
}


export default Card;