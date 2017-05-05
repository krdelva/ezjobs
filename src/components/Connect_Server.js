var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.indeed.com/ads/apisearch?publisher=5101146230298050&v=2');
xhr.send(null);
var weatherRes = undefined;
weatherRes = xhr.onreadystatechange = () => {
  let DONE = 4;
  let OK = 200;
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      console.log(xhr.responseText);
    } else {
      console.log('Error: ' + xhr.status);
    }
  }
}
