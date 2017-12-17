import React from 'react';
import './SexLogButton.scss';

const SexLogButton = (props) => (
    <button onClick={props.onClick} className={`sexlog-button ${props.color}`}>{props.children}</button>
);

export default SexLogButton;