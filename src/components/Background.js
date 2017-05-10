import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {mapStateToProps} from '../redux/store.js';
import {loader, getJobs} from './Connect_Server.js';
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
    //this.onDescriptionChange = this.onDescriptionChange.bind(this);
    //this.onLocationChange = this.onLocationChange.bind(this);
    //this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  handleClick = () => {
    //this.props.loader();
    //this.props.getJobs();
  }
  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
    // console.log(this.state.description);
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
        <form onSubmit={this.onFormSubmit}>
          <input placeholder='Input description' value={this.state.description} onChange={this.onDescriptionChange}/>
          <input placeholder='Input location' value={this.state.location} onChange={this.onLocationChange}/>
          <span>
            <button type='submit'>Click Me!</button>
          </span>
        </form>
        <button onClick={() => this.handleClick()}>Click Me!</button>
        <div id='list'>
        {
          this.props.data ? this.props.data.map((ele, i) => {
            //let text = '<p class="title">' + ele.title + '</p>';
            //let html =  $.parseHTML(text);
            //$('#list').append(html);
            return <p key={i}><Link id={ele.id} to={'/' + ele.id}>{ele.title}</Link></p>
          }): <h1>JAJAJAJ</h1>
        }
        </div>
        <Route path='/:id' component={Weather}/>
      </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loader, getJobs }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Background);
