import React from 'react';
import './PlanOption.scss';

const PlanOption = (props) => {
    const discountText = (string) => {
        if(string) return string.substring(0, string.length - 4);
        return;
    };
    const discountValue = (string) => {
        if(string) return string.substring(string.length - 4, string.length);
        return;
    };
    return (
        <div className="plan-option">
            <div className="selected-radio-container">
                <div className="selected-radio"></div>
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
}

export default PlanOption;