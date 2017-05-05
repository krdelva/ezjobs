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
