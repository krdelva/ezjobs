import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../redux/store.js';
import {goBack} from '../redux/actions.js';
import {bindActionCreators} from 'redux';

class Weather extends Component {
  handleClick = () => {
    console.log('calling');
    this.props.goBack();
  }
  render() {
    return (
      <div id='job'>
      <button className='submit-button' onClick={() => this.handleClick()}>GO BACK!</button>
      { this.props.data.map(ele => {
          if (ele.id === this.props.currJob) {
            return <div key={ele.id}><h2 style={{textDecoration: 'underline', color: '#C7EFCF'}}>{ele.title}</h2><p>{ele.company}</p><p>{ele.location}</p><hr/><p dangerouslySetInnerHTML={{__html: ele.description}} /> </div>
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
