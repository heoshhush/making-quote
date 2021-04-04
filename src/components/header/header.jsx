import React from 'react';
import Styles from './header.module.css'

const Header = (props) => {
    return(
        <div className={Styles.header}>
            <div className={Styles.logo}>Making Quote</div> 
        </div>

    )
}

export default Header;