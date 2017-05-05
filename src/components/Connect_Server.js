var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.indeed.com/ads/apisearch?publisher=5101146230298050&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2');
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
