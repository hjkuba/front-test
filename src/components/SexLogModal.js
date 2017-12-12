import React from 'react';
import { Modal } from 'react-bootstrap';

const SexLogModal = () => (
    <Modal show={true}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Text in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
);

export default SexLogModal;