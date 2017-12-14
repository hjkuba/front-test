import React from 'react';
import './PriceContainer.scss';

const PriceContainer = (props) => (
    <div className="price-container">
        <span className="currency">{props.currency}</span>
        <span className="integer">{props.integer}</span>
        <div className="decimal-periodicy-container">
            <span className="decimal">{props.decimal}</span>
            <span className="periodicy">{props.periodicy}</span>
        </div>
    </div>
);

export default PriceContainer;