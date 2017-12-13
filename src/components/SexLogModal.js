import React from 'react';
import { Modal } from 'react-bootstrap';
import './SexLogModal.scss';

const SexLogModal = (props) => (
    <Modal className="sexlog-modal" show={true}>
        {props.children}
    </Modal>
);

export default SexLogModal;