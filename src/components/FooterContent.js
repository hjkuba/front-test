import React from 'react';
import secureIcon from '../img/icon-secure.png';
import './FooterContent.scss';

const FooterContent = (props) => (
    <div className="footer-content">
        <img className="secure-stamp" src={secureIcon} alt="security stamp"/>
        {props.button}
    </div>
);

export default FooterContent;