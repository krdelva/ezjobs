var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jobs.github.com/positions.json?description=python&location=new+york');
xhr.send(null);
var weatherRes = undefined;
weatherRes = xhr.onreadystatechange = () => {
  let DONE = 4;
  let OK = 200;
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText);
      return xhr.responseText;
    } else {
      console.log('Error: ' + xhr.status);
    }
  }
}

function getCORS(url, success) {
  var request = new XMLHttpRequest();
  if (!('withCredentials' in request)) request = new XDomainRequest();
  request.open('GET', url);
  request.onreadystatechange = success;
  request.send();
  return request;
}

getCORS('https://jobs.github.com/positions.json?description=python&location=new+york', (request) => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
})
