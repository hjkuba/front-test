import React from 'react';
import { Form, Row, ControlLabel, InputGroup, FormControl, Alert, Col } from 'react-bootstrap';
import './SexLogForm.scss';
import svg from '../img/icon-credit-card.svg';
import months from '../data/months';
import years from '../data/years';

const SexLogForm = (props) => {
    const { creditCardNumber, month, year, titularName, securityCode } = props.formState;
    const renderMonths = () => (
        months.map((month, index) => (
            <option key={index} value={month.value}>{month.name}</option>
        ))
    );
    const renderYears = () => (
        years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
        ))
    );
    return (
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
                        <FormControl
                            value={creditCardNumber ? creditCardNumber : ''}
                            onChange={(e, value) => props.onChangeForm('creditCardNumber', e.target.value)}
                            type="number"
                            placeholder="Número do Cartão"
                        />
                    </InputGroup>
                </Col>
                <Col md={4}>
                    <ControlLabel>Validade</ControlLabel>
                    <div>
                        <FormControl
                            value={month ? month : ''}
                            onChange={(e, value) => props.onChangeForm('month', e.target.value)}
                            className="select"
                            componentClass="select"
                            placeholder="Mês"
                        >
                            <option disabled value="">Mês</option>
                            { renderMonths() }
                        </FormControl>
                        <FormControl
                            value={year ? year : ''}
                            onChange={(e, value) => props.onChangeForm('year', e.target.value)}
                            className="select"
                            componentClass="select"
                            placeholder="Ano"
                        >
                            <option disabled value="">Ano</option>
                            { renderYears() }
                        </FormControl>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <ControlLabel>Nome do Titular</ControlLabel>
                    <FormControl
                        value={titularName ? titularName : ''}
                        onChange={(e, value) => props.onChangeForm('titularName', e.target.value)}
                        placeholder="Nome do Titular"
                    />
                </Col>
                <Col md={4}>
                    <ControlLabel>Código de Segurança</ControlLabel>
                    <FormControl
                        type="number"
                        value={securityCode ? securityCode : ''}
                        onChange={(e, value) => props.onChangeForm('securityCode', e.target.value)}
                        className="security-code-input"
                        placeholder="000"
                    />
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
};

export default SexLogForm;