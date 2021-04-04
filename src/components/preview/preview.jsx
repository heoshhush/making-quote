import React from 'react';
import Card from '../card/card';
import Styles from './preview.module.css'

const Preview = ({cards, keys}) => {
    return(
        <section className={Styles.title}>
            <h1>Preview</h1>
            {keys.map(key => (
                <Card 
                    card={cards[key]}
                    key={key}
                />
            ))}
        </section>
    )
}

export default Preview;