import React from 'react';
import './Notification.scss';

const Notification = (props) => (
    <div className="notification">
        {props.icon}
        <p className="primary">{props.primaryText}</p>
        <p className="secondary">{props.secondaryText}</p>
    </div>
);

export default Notification;