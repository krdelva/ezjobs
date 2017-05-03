import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps, store} from './redux/store.js';
import Weather from './components/Weather.js';
import Background from './components/Background.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to BanAnime</h2>
        </div>
        <Weather />
        <Background />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <script type='text/javascript' src='scripts/geolocation.js'></script>
      </div>
    );
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

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
