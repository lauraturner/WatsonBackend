var https = require('https');
var request = require('request');




var directions_Request = "https://maps.googleapis.com/maps/api/directions/json?region=ca&origin=396+Brock+Street+Kingston+ON&destination=99+University+Drive+Kingston+ON&key={key}";

request(directions_Request, function (error, response, directions) {
  if (!error && response.statusCode == 200) {
  	directions = JSON.parse(directions);
  	trip_Duration = directions.routes[0].legs[0].duration.text; 
  	console.log(trip_Duration);
  }
});


//Duration for a trip has been found start on figuring out how to pass in variable parameters, change key back