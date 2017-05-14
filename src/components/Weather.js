import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../redux/store.js';
import {goBack} from '../redux/actions.js';
import $ from 'jquery';
import {Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';

class Weather extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log('calling');
    this.props.goBack();
  }
  render() {
    return (
      <div id='job'>
      <button onClick={() => this.handleClick()}>GO BACK!</button>
      <h1>Your info goes here:</h1>
      { this.props.data.map(ele => {
          if (ele.id === this.props.currJob) {
            return <div key={ele.id}><p dangerouslySetInnerHTML={{__html: ele.description}} /> </div>
          }
        })
      }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ goBack }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
