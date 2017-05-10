import $ from 'jquery';
// https://jobs.github.com/positions.json?description=python&location=new+york

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
