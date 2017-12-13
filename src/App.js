import React, { Component } from 'react';
import { SexLogModal, SexLogHeader } from './components';

class App extends Component {
    render() {
        return (
            <div>
                <SexLogModal>
                    <SexLogHeader
                        title="Assine o Sexlog VIP"
                    />
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
