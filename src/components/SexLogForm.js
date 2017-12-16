import React from 'react';
import { Form, FormGroup, Row, ControlLabel, InputGroup, FormControl, Alert, Col } from 'react-bootstrap';
import './SexLogForm.scss';
import svg from '../img/icon-credit-card.svg';

const SexLogForm = (props) => (
    <Form className="sexlog-form">
        <Row className="chosen-plan-container">
            <Col xs={12}>
                <div className="chosen-plan">Plano escolhido: <span>{props.plan.name} - {props.plan.total}</span></div>
            </Col>
        </Row>
        <Row>
            <Col md={8}>
                <ControlLabel>Número do cartão</ControlLabel>
                <InputGroup>
                    <InputGroup.Addon><img src={svg}/></InputGroup.Addon>
                    <FormControl type="text" placeholder="Número do Cartão" />
                </InputGroup>
            </Col>
            <Col md={4}>
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
            </Col>
        </Row>
        <Row>
            <Col md={8}>
                <ControlLabel>Nome do Titular</ControlLabel>
                <FormControl placeholder="Nome do Titular"/>
            </Col>
            <Col md={4}>
                <ControlLabel>Código de Segurança</ControlLabel>
                <FormControl className="security-code-input" placeholder="000"/>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <Alert>
                    Para sua privacidade, a cobrança será feita em nome de "assinet-pgto-sl".
                </Alert>
            </Col>
        </Row>
    </Form>
);

export default SexLogForm;