require('dotenv').config()
var https = require('https');
var request = require('request');

const GOOGLE_KEY = process.env.GOOGLE_KEY; 
var origin = '396+Brock+Street+Kingston+ON';
var destination = '1200+Princess+Street+Kingston+ON';

var directions_Request = `https://maps.googleapis.com/maps/api/directions/json?region=ca&origin=${origin}&destination=${destination}&key=${GOOGLE_KEY}`;

request(directions_Request, function (error, response, directions) {
  if (!error && response.statusCode == 200) {
  	directions = JSON.parse(directions);
  	trip_Duration = directions.routes[0].legs[0].duration.text; 
  	trip_Directions = directions.routes[0].legs[0].steps

  	for (var i = 0; i < trip_Directions.length; i++) {
    console.log(trip_Directions[i].html_instructions); 
}
  }
});


//Duration for a trip has been found start on figuring out how to pass in variable parameters, change key back