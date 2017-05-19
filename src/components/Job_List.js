import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {mapStateToProps} from '../redux/store.js';
import {loader, getJobs} from './Connect_Server.js';
import {jobClick} from '../redux/actions.js';
import JobDescription from './Job_Description.js';

class JobList extends Component {
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
            this.props.jobBool ? <JobDescription /> : this.props.data ? this.props.data.map((ele, i) => {
              return <div className='list_item' onClick={() => this.handleClick(ele.id)} key={i}>
                  <h3 style={{textDecoration:'underline', color: '#C7EFCF'}}>{ele.title}</h3>
                  <p>{ele.company} - <span style={{fontSize:'14px'}}>{ele.location}</span></p>
                </div>
            }): this.props.loading ? <img className='center-img' src={require('../images/loading_gif_transparent.gif')} alt='Loading GIF' width='400' height='400' />
            : <h1 className='center' style={{color: '#C7EFCF'}}>Welcome to EZ JOBS</h1>
          }
          </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loader, getJobs, jobClick }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
