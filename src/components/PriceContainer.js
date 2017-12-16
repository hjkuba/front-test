import React from 'react';
import './PriceContainer.scss';
import credit from '../img/icon-credit-card.svg';
import debit from '../img/icon-debit.svg';
import boleto from '../img/icon-boleto.svg';

const PriceContainer = (props) => {
    const splitPaymentString = (paymentString) => {
        const splittedString = paymentString.split("<b>");
        return {
            text: splittedString[0],
            highlight: splittedString[1].replace("</b>", "")
        };
    };
    const renderPayments = () => props.payments.map((payment, index) => {
            const paymentObj = splitPaymentString(payment);
            let icon;
            switch(paymentObj.highlight) {
                case 'cartão de crédito':
                    icon = credit;
                    break;
                case 'débito em conta':
                    icon = debit;
                    break;
                case 'boleto bancário':
                    icon = boleto;
            }
        return <div className="payment-description"><img src={icon}/><p key={index}>{paymentObj.text}<b>{paymentObj.highlight}</b></p></div>;
        }
    );
    return (
        <div className="price-container">
            <div className="price-value">
                <span className="currency">{props.currency}</span>
                <span className="integer">{props.integer}</span>
                <div className="decimal-periodicy-container">
                    <span className="decimal">{props.decimal}</span>
                    <span className="periodicy">{props.periodicy}</span>
                </div>
            </div>
            <div className="price-description">
                { renderPayments() }
            </div>
        </div>
    );
}
export default PriceContainer;