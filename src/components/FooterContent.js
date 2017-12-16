import React from 'react';
import secureIcon from '../img/icon-secure.png';
import './FooterContent.scss';

const FooterContent = (props) => (
    <div className="footer-content">
        <img className="secure-stamp" src={secureIcon}/>
        {props.button}
    </div>
);

export default FooterContent;