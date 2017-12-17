import React from 'react';
import { SexLogButton } from '.';
import './Notification.scss';

const Notification = (props) => (
    <div className="notification">
        {props.icon}
        <p className="primary">{props.primaryText}</p>
        <p className="secondary">{props.secondaryText}</p>
        <div className="button-container">
            <SexLogButton color="purple" onClick={props.onButtonClick}>{props.buttonText}</SexLogButton>
        </div>
    </div>
);

export default Notification;