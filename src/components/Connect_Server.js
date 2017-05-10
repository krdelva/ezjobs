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
            dataType: 'xml',
            type: 'GET',
            headers: {'Access-Control-Allow-Origin' : '*'},
            url: 'https://api.indeed.com/ads/apisearch?publisher=5101146230298050&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2' ,
            success: function(data, textStatus, jqXHR) {
              console.log(JSON.stringify(data));
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
