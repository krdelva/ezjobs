import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import {mapStateToProps, store} from './redux/store.js';
import Background from './components/Background.js';
import Form from './components/Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Form />
        </div>
        <Background />
        <script type='text/javascript' src='scripts/geolocation.js'></script>
      </div>
    );
  }
}


const Container = connect(mapStateToProps, null)(App);

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default AppWrapper;
