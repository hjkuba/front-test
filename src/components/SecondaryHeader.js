import React from 'react';
import './SecondaryHeader.scss';

const SecondaryHeader = (props) => {
    if(props.show)
        return (
            <div className="secondary-header">
                <div onClick={props.onLeftClick} className={`button left-button ${props.selectedButton === 1 ? 'selected' : ''}`}>
                    <div className="button-content">{props.leftButtonText}</div>
                    <div className="triangle"></div>
                </div>
                <div onClick={props.onRightClick} className={`button ${props.selectedButton === 2 ? 'selected' : ''}`}>
                    <div className="button-content">{props.rightButtonText}</div>
                </div>
            </div>
        );
    return <div></div>
};

export default SecondaryHeader;