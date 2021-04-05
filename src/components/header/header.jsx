import React, { memo } from 'react';
import Styles from './header.module.css'

const Header = memo(
    (props) => {
    return(
        <div className={Styles.header}>
            <div className={Styles.logo}>Making Quote</div> 
        </div>

    )
}
)

export default Header;