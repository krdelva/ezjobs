// import React from 'react';
// import {connect} from 'react-redux';
// import {mapStateToProps, mapDispatchToProps} from '../redux/store.js';
// import {Background} from './Background.js';
// import $ from 'jquery';
//
// class Response extends Background {
//   render() {
//     $.ajax({
//             dataType: 'jsonp',
//             type: 'GET',
//             headers: {'Access-Control-Allow-Origin' : '*'},
//             url: "https://jobs.github.com/positions.json?description=python&location=new+york",
//             success: function(data, textStatus, jqXHR) {
//               return (
//                 data.map(ele => {
//                   {<div>ele.description</div>}
//                 })
//               )
//             },
//             error: function(jqXHR, textStatus, errorThrown) {
//               console.log(errorThrown);
//             }
//     });
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Response);
