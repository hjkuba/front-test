import React from 'react';
import { Modal } from 'react-bootstrap';
import './SexLogBody.scss';

const SexLogBody = (props) => (
    <Modal.Body className="sexlog-body">
        {props.children}
    </Modal.Body>
);

export default SexLogBody;