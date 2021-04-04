import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth } from '../../services/firebase';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import Styles from './maker.module.css'

const Maker = ({ authService } ) => {
    const [cards, setCards] = useState({

        1: {
            id: 1 ,
            author: 'Heo',
            quote: 'Know Yourself',
            fileName: 'heo',
            fileURL: null,
        },
        2: {
            id: 2 ,
            author: 'Heo',
            quote: 'Know Yourself2',
            fileName: 'heo',
            fileURL: null,
        },
        3: {
            id: 3 ,
            author: 'Heo',
            quote: 'Know Yourself3',
            fileName: 'heo',
            fileURL: null,
        },
    })
    
    
    
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }
    
    const updateCard = (card) => {
        setCards((cards) => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        })
    }

    // const updateCard = (card) => {
    //     const updated = {...cards};
    //     updated[card.id] = card;
    //     setCards(updated)
    // }

    useEffect(
        firebaseAuth.onAuthStateChanged(user => {
            if (!user){
                history.push('/')
            }
        })
        , [authService])
    
    return (
        <>
        <Header />
        <section className={Styles.container}>
                <div className={Styles.logout}>
                    <button className={Styles.logoutBtn} onClick={onLogout}>Logout</button>
                </div>
                <div className={Styles.contents}>
                    <div className={Styles.editor}>
                        <Editor 
                            cards = {cards}
                            keys = {Object.keys(cards)}
                            updateCard = {updateCard}
                        />
                    </div>
                    

                    <div className={Styles.preview}>
                        <Preview 
                            cards = {cards}
                            keys = {Object.keys(cards)}
                        />  
                    </div>

                </div>
        </section>
        <Footer />
        </>
    
    )
}

export default Maker;