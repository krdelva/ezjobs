import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/store.js';

class Background extends Component {
  render() {
    return (
      <div>
        {this.props.squares.map(ele => {
          return <div id={ele.id} key={ele.id} className='color'>This is: {ele.id}</div>
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Background);
