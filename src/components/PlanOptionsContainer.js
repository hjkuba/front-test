import React from 'react';
import './PlanOptionsContainer.scss';

const PlanOptionsContainer = (props) => (
    <div className="plan-options-container">
        <form>
            {props.children}
        </form>
    </div>
);

export default PlanOptionsContainer;