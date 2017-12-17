import React from 'react';
import './PlanOption.scss';

const PlanOption = (props) => {
    const discountText = (string) => {
        if(string) return string.substring(0, string.length - 4);
    };
    const discountValue = (string) => {
        if(string) return string.substring(string.length - 4, string.length);
    };
    return (
        <div className={`plan-option ${props.selected ? 'selected' : ''}`}>
            <div className="triangle"></div>
            <div onClick={props.onClick} className="radio-outer">
                <div className="radio-inner"></div>
            </div>
            <div className="title">
                {props.name}
            </div>
            <div className="discount">
                { discountText(props.discount) }
                <span className="discount-value">
                    { discountValue(props.discount) }
                </span>
            </div>
        </div>
    );
};

export default PlanOption;