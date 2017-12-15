import React from 'react';
import { FormGroup, ControlLabel, InputGroup, FormControl, Alert } from 'react-bootstrap';
import './SexLogForm.scss';
import svg from '../img/icon-credit-card.svg';

const SexLogForm = (props) => (
    <form className="sexlog-form">
        <FormGroup>
            <ControlLabel>Número do cartão</ControlLabel>
            <InputGroup>
                <InputGroup.Addon><img src={svg}/></InputGroup.Addon>
                <FormControl type="text" placeholder="Número do Cartão" />
            </InputGroup>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
            <ControlLabel>Validade</ControlLabel>
            <div>
                <FormControl className="select" componentClass="select" placeholder="Mês" defaultValue="">
                    <option disabled value="">Mês</option>
                    <option value="other">...</option>
                </FormControl>
                <FormControl className="select" componentClass="select" placeholder="Ano" defaultValue="">
                    <option disabled value="">Ano</option>
                    <option value="other">...</option>
                </FormControl>
            </div>
        </FormGroup>
        <FormGroup>
            <ControlLabel>Nome do Titular</ControlLabel>
            <FormControl placeholder="Nome do Titular"/>
        </FormGroup>
        <FormGroup>
            <ControlLabel>Código de Segurança</ControlLabel>
            <FormControl className="security-code-input" placeholder="000"/>
        </FormGroup>
        <Alert>
            Para sua privacidade, a cobrança será feita em nome de "assinet-pgto-sl".
        </Alert>
    </form>
);

export default SexLogForm;