import React, { Component } from 'react';
import { SexLogModal, SexLogHeader, SexLogBody, SexLogFooter, SexLogButton,
    PriceContainer, PlanOptionsContainer, PlanOption } from './components';
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
                )
        }
    }
    renderFooter() {
        switch(this.state.modalStep) {
            case 1:
                return <SexLogButton onClick={() => this.setState({modalStep: 2})}>Próximo passo: pagamento</SexLogButton>;
            case 2:
                return <SexLogButton>Concluir minha assinatura</SexLogButton>
        }
    }
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <SexLogButton onClick={() => this.setState({showModal: true})}>Open Modal</SexLogButton>
                <SexLogModal
                    show={this.state.showModal}
                    onHide={() => this.setState({showModal: false})}
                >
                    <SexLogHeader
                        returnButton={this.state.modalStep !== 1}
                        onReturn={() => this.setState({modalStep: this.state.modalStep - 1})}
                        title="Assine o Sexlog VIP"
                    />
                    <SexLogBody>
                        { this.renderBody() }
                    </SexLogBody>
                    <SexLogFooter>
                        { this.renderFooter() }
                    </SexLogFooter>
                </SexLogModal>
            </div>
        );
    }
}

export default App;

// {/*<Modal.Header closeButton>*/}
// {/*<Modal.Title>Modal heading</Modal.Title>*/}
// {/*</Modal.Header>*/}
// {/*<Modal.Body>*/}
// {/*<h4>Text in a modal</h4>*/}
// {/*</Modal.Body>*/}
// {/*<Modal.Footer>*/}
// {/*</Modal.Footer>*/}
