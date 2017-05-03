var latr;
var lonr;

function callback(lat, lon) {
  if (lat !== undefined) {
    latr = lat;
    lonr = lon;
  } else {
    geoFindMe(callback);
  }
}
function geoFindMe(callback) {
  var latitude;
  var longitude;

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    //callback(latitude, longitude);

    //output.appendChild(img);
    callback(latitude, longitude);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  navigator.geolocation.getCurrentPosition(success, error);

}
console.log('happening');
geoFindMe(callback);
var coords = {lat: latr, lng: lonr};
export default coords;
