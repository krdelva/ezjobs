import $ from 'jquery';
// https://jobs.github.com/positions.json?description=python&location=new+york

//Glassdoor:
//http://api.glassdoor.com/api/api.htm?v=1&format=json&148317=120&dMGXuiabV0G=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=192.168.43.42&useragent=Mozilla/%2F4.0

const jobsURL =  'https://jobs.github.com/positions.json?description=';

export const loader = () => {
  console.log('loading');
  return (dispatch) => {
    dispatch({
      type: 'LOADER',
      loading: true
    })
  }
}

/*
export const getJobs = (description, location) => {
  console.log('calling');
  return (dispatch) => {
    $.ajax({
            dataType: 'jsonp',
            type: 'GET',
            headers: {'Access-Control-Allow-Origin' : '*'},
            url: jobsURL + description + '&location=' + location ,
            success: function(data, textStatus, jqXHR) {
              console.log(JSON.stringify(data[0].description));
              dispatch({
                type: 'FETCH_JOBS',
                data,
                loading: false
              });
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log(errorThrown);
              dispatch({
                type: 'JOBS_ERR',
                errorThrown,
                loading: false
              });
            }
    });
  }
}
*/

export const getJobs = (description, location) => {
  console.log('calling');
  return (dispatch) => {
    $.ajax({
            dataType: 'jsonp',
            type: 'GET',
            headers: {'Access-Control-Allow-Origin' : '*'},
            url: 'http://api.glassdoor.com/api/api.htm?v=1&format=json&148317=120&dMGXuiabV0G=fz6JLNDfgVs&action=employers&q=pharmaceuticals&userip=127.0.0.1&useragent=Mozilla/%2F4.0' ,
            success: function(data, textStatus, jqXHR) {
              console.log(data);
              dispatch({
                type: 'FETCH_JOBS',
                data,
                loading: false
              });
            },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log(errorThrown);
              console.log(textStatus);
              console.log(jqXHR);
              dispatch({
                type: 'JOBS_ERR',
                errorThrown,
                loading: false
              });
            }
    });
  }
}
