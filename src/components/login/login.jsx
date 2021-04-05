import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();
    const moveToMaker = (userId) => {
        history.push(
            {pathname: '/maker',
             state: {id: userId},
    })
    }

    const onLogin = (event) => {
        const btnText = event.target.innerText
        authService
        .login(btnText)
        .then(data => moveToMaker(data.user.uid))
    }
    
    useEffect(() => {
        authService.onAuthChanged(user => user && moveToMaker(user.uid))
    })
    


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
