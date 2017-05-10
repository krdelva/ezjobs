import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/store.js';
import $ from 'jquery';

class Weather extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(this.props.match.params.id);
    console.log(this.props.data);
  }
  render() {
    return (
      <div>
      <h1>Your info goes here:</h1>

      {this.props.data.map((ele, i) => {
          if (ele.id === this.props.match.params.id) {
            return (
              <div key={i} id='job'>
              <h4>{ele.title}</h4>
              <p>{ele.description}</p>
              </div>
            );
          }
        }
      )}
      <p>Bob</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
