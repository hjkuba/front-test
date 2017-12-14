import React from 'react';
import './SexLogButton.scss';

const SexLogButton = (props) => (
    <button className="sexlog-button">{props.children}</button>
);

export default SexLogButton;