import React from 'react';
import { Modal } from 'react-bootstrap';
import './SexLogFooter.scss';

const SexLogFooter = (props) => (
    <Modal.Footer className={`sexlog-footer ${props.hideOnLarge ? 'hideOnLarge' : ''}`}>
        {props.children}
    </Modal.Footer>
);

export default SexLogFooter;