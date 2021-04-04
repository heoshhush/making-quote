import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { firebaseAuth } from '../../services/firebase';
import Footer from '../footer/footer';
import Header from '../header/header';
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
        <div className={Styles.container}>
        <Header />
            <section className={Styles.login}>
                <div className={Styles.title}>
                <p>The wise quote is by no means a new story, but it is always comforting.
                </p>- Gustave Flaubert
                </div>
                <div className={Styles.loginInLogin}>
                <div className={Styles.loginTitle}>Login</div>
                  <button className={Styles.button} onClick={onLogin}>Google</button>
                 <button className={Styles.button} onClick={onLogin}>Github</button>
                </div>
        </section>
        <Footer />
        </div>
    )
    
}

export default Login;
