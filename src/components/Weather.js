import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/store.js';

class Weather extends Component {
  handleClick = () => {
    console.log('called');
    //() => this.props.increment;
  }
  render() {
    return (
      <div>
      <h1>Your mom goes here {this.props.count}</h1>
      <button onClick={() => this.props.increment()}>Add</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
