import React from 'react';
import { Modal, Glyphicon } from 'react-bootstrap';
import './SexLogHeader.scss';

const SexLogHeader = (props) => {
    const renderReturnButton = () => (
        props.returnButton ?
            <button
                className="return-button"
                onClick={props.onReturn}>
                <Glyphicon glyph="chevron-left"/>
            </button>
            : null
    );
    return (
        <Modal.Header className="sexlog-header" closeButton>
            { renderReturnButton() }
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
    );
}

export default SexLogHeader;