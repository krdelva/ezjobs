import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {mapStateToProps} from '../redux/store.js';
import {loader, getJobs} from './Connect_Server.js';
import {jobClick} from '../redux/actions.js';
import Weather from './Weather.js';

class Background extends Component {
  handleClick = (id) => {
    console.log(id);
    console.log(this.props.jobBool);
    this.props.jobClick(id);
  }

  render() {
    return (
      <div>
          <div id='list'>
          {
            this.props.jobBool ? <Weather /> : this.props.data ? this.props.data.map((ele, i) => {
              return <div className='list_item' onClick={() => this.handleClick(ele.id)} key={i}>
                  <h3 style={{textDecoration:'underline'}}>{ele.title}</h3>
                  <p>{ele.company}</p><p>{ele.location}</p>
                </div>
            }): <img className='center-img' src={require('../images/Loading_icon.gif')} alt='Loading GIF' width='400' height='400' />
          }
          </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loader, getJobs, jobClick }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Background);
