// WHEN I view current weather conditions for that city
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var apiKey = 'd2e2c17de561fb5216c9679df62394b5';
var userSearch = ""
var currentWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
var geoAPIurl= `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={30}&appid=${apiKey}`;
var futureAPIurl
// Value from search form
var lat;
var lon;


// function getLatLon then pass into geoAPI -------does 30 work for limit number? what should this be?
function getLatLon(){

fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=30&appid=${apiKey}`)    
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    console.log("lat", data[0].lat)
    console.log("lon", data[0].lon)
    lat = data[0].lat
    lon= data[0].lon
    currentForecast();
});
};

function currentForecast(){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(function(response){
    return response.json();
    }).then(function(data){
        console.log(data);
        // APPEND TO PAGE   
    })
    };








