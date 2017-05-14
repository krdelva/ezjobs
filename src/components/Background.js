import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {mapStateToProps} from '../redux/store.js';
import {loader, getJobs} from './Connect_Server.js';
import {jobClick} from '../redux/actions.js';
import {BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import Weather from './Weather.js';
import $ from 'jquery';

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      location: ''
    }
  }
  handleClick = (id) => {
    console.log(id);
    console.log(this.props.jobBool);
    this.props.jobClick(id);
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
      <Router>
      <div>
        <div className='center'>
          <form onSubmit={this.onFormSubmit}>
            <input placeholder='Input description' value={this.state.description} onChange={this.onDescriptionChange}/>
            <input placeholder='Input location' value={this.state.location} onChange={this.onLocationChange}/>
            <span>
            <button type='submit'>Click Me!</button>
            </span>
          </form>
        </div>
        <div>
          <div id='list'>
          {
            this.props.jobBool ? <Weather /> : this.props.data ? this.props.data.map((ele, i) => {
              return <div className='list_item' onClick={() => this.handleClick(ele.id)} key={i}>
                  <h4>{ele.title}</h4>
                  <p>{ele.company}</p><p>{ele.location}</p>
                </div>
            }): <img className='center-img' src={require('../images/Loading_icon.gif')} alt='Loading GIF' width='400' height='400' />
          }
          </div>
          <br style={{clear: 'both'}} />
        </div>
      </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loader, getJobs, jobClick }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Background);
