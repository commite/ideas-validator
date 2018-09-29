import React, { Component } from 'react';
import { HeaderBar } from "./components/HeaderBar/index";
import { IdeaValidatorForm } from "./components/IdeaValidatorForm/index";
import {
    Container,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  render() {
    return (
        <div>
          <HeaderBar />
          <Container text style={{ marginTop: '7em' }}>
            <IdeaValidatorForm />
          </Container>
        </div>
    );
  }
}

export default App;
