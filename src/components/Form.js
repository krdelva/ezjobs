import React, {Component} from 'react';
import {mapStateToProps} from '../redux/store.js';
import {bindActionCreators} from 'redux';
import {loader, getJobs} from './Connect_Server.js';
import {connect} from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      location: ''
    }
  }
  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }
  onLocationChange = (event) => {
    this.setState({ location: event.target.value });
  }
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.loader();
    this.props.getJobs(this.state.description, this.state.location);
    this.setState({
      description: '',
      location: ''
    })
  }
  render() {
    return (
      <div id='form' className='center'>
        <h1 style={{color: '#30FF31', fontFamily: 'cursive'}}>EZ JOBS</h1>
        <form onSubmit={this.onFormSubmit}>
          <input placeholder='Input description' value={this.state.description} onChange={this.onDescriptionChange}/>
          <input placeholder='Input location' value={this.state.location} onChange={this.onLocationChange}/>
          <span>
          <button className='submit-button' type='submit'>Click Me!</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loader, getJobs,}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
