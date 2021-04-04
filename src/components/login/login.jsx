import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth } from '../../services/firebase';
import Styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();

    useEffect(
        firebaseAuth.onAuthStateChanged(user => {
            if(user){
                history.push('/maker')
                console.log('Move to Maker Page')
            }
        }), [authService]
    )
    
    const onLogin = (event) => {
        const btnText = event.target.innerText
        authService.login(btnText)
    }
    
    return(
        <section>
            <h1>hello</h1>
            <button onClick={onLogin}>Google</button>
            <button onClick={onLogin}>Github</button>
        </section>
    )
    
}

export default Login;
