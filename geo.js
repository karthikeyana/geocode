var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: ' AIzaSyA6oeTBjzkaluuFGMJFgdEWoGfElxbfcCk', // for Mapquest, OpenCage, Google Premier
  formatter: 'json'         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);

geocoder.reverse({lat:25.2425166666667, lon:55.2984633333333}, function(err, res) {
  console.log(res);
});
