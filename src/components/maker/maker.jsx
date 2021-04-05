import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth } from '../../services/firebase';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import Styles from './maker.module.css'

const Maker = ({ authService, imageUploader, dataBase } ) => {
    const historyState = useHistory().location.state.id
    const [cards, setCards] = useState({})
    const [userId, setUserId] = useState(historyState && historyState)
    
    dataBase.syncData();

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

    const deleteCard = (card) => {
        const toDelete = {...cards};
        delete(toDelete[card.id]);
        setCards(toDelete)
    }

    useEffect(
        firebaseAuth.onAuthStateChanged(user => {
            if (!user){
                history.push('/')
            }
        })
        , [authService])

    useEffect(() => {
        dataBase.syncData(userId, value => setCards(value))
    },[dataBase])


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
                            deleteCard = {deleteCard}
                            imageUploader = {imageUploader}
                            userId = {userId}
                            dataBase= {dataBase}
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