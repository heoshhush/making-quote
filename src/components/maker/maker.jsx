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
            fileURL: 'heo',
        },
        2: {
            id: 2 ,
            author: 'Heo',
            quote: 'Know Yourself2',
            fileName: 'heo',
            fileURL: 'heo',
        },
        3: {
            id: 3 ,
            author: 'Heo',
            quote: 'Know Yourself3',
            fileName: 'heo',
            fileURL: 'heo',
        },
    })
    
    
    
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

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
        
        //해야할일: editor, add, preview 만들기
    )
}

export default Maker;