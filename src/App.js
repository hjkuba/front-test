import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { SexLogModal, SexLogHeader, SexLogBody, SexLogFooter, SexLogForm, SexLogButton,
    PriceContainer, PlanOptionsContainer, PlanOption, Notification, SecondaryHeader } from './components';
import data from './server/data.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            selectedPlan: data.plans[0],
            modalStep: 1
        };
    }
    renderPlans(plans) {
        return plans.map((plan, index) => (
            <PlanOption
                selected={this.state.selectedPlan.id === plan.id}
                key={index}
                name={plan.name}
                discount={plan.discount}
                onClick={() => this.setState({selectedPlan: plan})}
            />
        ));
    }
    renderBody() {
        switch(this.state.modalStep) {
            case 1:
                return (
                    <div>
                        <PriceContainer
                            currency={this.state.selectedPlan.price.currency}
                            integer={this.state.selectedPlan.price.integer}
                            decimal="90"
                            periodicy="/mês"
                        />
                        <PlanOptionsContainer>
                            { this.renderPlans(data.plans)}
                        </PlanOptionsContainer>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <SexLogForm/>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Notification
                            icon={<Glyphicon glyph="ok-sign"/>}
                            primaryText="Parabéns!"
                            secondaryText="Você agora é um assinante Sexlog!"
                            buttonText="Explorar o Sexlog"
                            onButtonClick={() => this.setState({showModal: false})}
                        />
                    </div>
                )
        }
    }
    renderFooter() {
        switch(this.state.modalStep) {
            case 1:
                return <SexLogButton onClick={() => this.setState({modalStep: 2})}>Próximo passo: pagamento</SexLogButton>;
            case 2:
                return <SexLogButton onClick={() => this.setState({modalStep: 3})}>Concluir minha assinatura</SexLogButton>;
            case 3:
                return <SexLogButton color="purple" onClick={() => this.setState({showModal: false})}>Explorar o Sexlog</SexLogButton>;
        }
    }
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 40}}>
                <button style={styles.buttonStyles} onClick={() => this.setState({showModal: true})}>Open Modal</button>
                <SexLogModal
                    show={this.state.showModal}
                    onHide={() => this.setState({showModal: false})}
                >
                    <SexLogHeader
                        returnButton={this.state.modalStep !== 1}
                        onReturn={() => this.setState({modalStep: this.state.modalStep - 1})}
                        title="Assine o Sexlog VIP"
                    >
                        <SecondaryHeader
                            show={this.state.modalStep !== 3}
                            selectedButton={this.state.modalStep}
                            leftButtonText="Escolha o plano ideal para você"
                            onLeftClick={() => this.setState({modalStep: 1})}
                            onRightClick={() => this.setState({modalStep: 2})}
                            rightButtonText="Escolha a forma de pagamento"
                        />
                    </SexLogHeader>
                    <SexLogBody>
                        { this.renderBody() }
                    </SexLogBody>
                    <SexLogFooter
                        hideOnLarge={this.state.modalStep === 3}
                    >
                        { this.renderFooter() }
                    </SexLogFooter>
                </SexLogModal>
            </div>
        );
    }
}

const styles = {
    buttonStyles: {
        backgroundColor: '#49cba4',
        color: 'white',
        border: 'none',
        fontWeight: 'bold',
        borderRadius: 5,
        padding: '10px 40px'
    }
};

export default App;