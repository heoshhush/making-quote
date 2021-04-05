import React, { memo } from 'react';
import Styles from './footer.module.css'

const Footer = memo(
    (props) => {
    return(
        <div className={Styles.footer}>
            <div className={Styles.logo}>Copyright 2021. heo. All right reserved</div>
        </div>

    )
    }
)

export default Footer;