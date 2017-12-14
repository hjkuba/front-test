import React, { Component } from 'react';
import { SexLogModal, SexLogHeader, SexLogBody, SexLogFooter,
    PriceContainer, PlanOptionsContainer, PlanOption } from './components';

class App extends Component {
    render() {
        return (
            <div>
                <SexLogModal>
                    <SexLogHeader
                        title="Assine o Sexlog VIP"
                    />
                    <SexLogBody>
                        <PriceContainer
                            currency="R$"
                            integer="49"
                            decimal="90"
                            periodicy="/mês"
                        />
                        <PlanOptionsContainer>
                            <PlanOption name="1 mês"/>
                            <PlanOption name="3 meses" discount="Economize 30%"/>
                            <PlanOption name="6 meses" discount="Economize 60%"/>
                        </PlanOptionsContainer>
                    </SexLogBody>
                    <SexLogFooter>
                        <button>Pagar</button>
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
