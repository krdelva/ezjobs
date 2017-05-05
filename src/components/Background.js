import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/store.js';

class Background extends Component {
  render() {
    return (
      <div>
        {this.props.squares.map((ele, i) => {
          return <div id={i} key={i} className='color'>This is: {i}</div>
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Background);
