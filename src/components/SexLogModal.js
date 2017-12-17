import React from 'react';
import { Modal } from 'react-bootstrap';
import './SexLogModal.scss';

const SexLogModal = (props) => (
    <Modal
        className="sexlog-modal"
        bsSize="large"
        show={props.show}
        onHide={props.onHide}
    >
        {props.children}
    </Modal>
);

export default SexLogModal;