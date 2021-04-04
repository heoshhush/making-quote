import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth } from '../../services/firebase';
import Styles from './maker.module.css'

const Maker = ({ authService } ) => {
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
        <section>
            <h1>this is Maker Page</h1>
            <button onClick={onLogout}>Logout</button>
        </section>
        
    )
}

export default Maker;