import React from 'react';
import { Modal } from 'react-bootstrap';
import './SexLogHeader.scss';

const SexLogHeader = (props) => (
    <Modal.Header className="sexlog-header" closeButton>
        <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
);

export default SexLogHeader;