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

var geoApiKey = 'd2e2c17de561fb5216c9679df62394b5';
var searchInputVal = document.querySelector("#user-search")
// userSearch = 'Austin';
const btnEl = document.querySelector("#user-form");

var currentWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=d2e2c17de561fb5216c9679df62394b5`;


var lat;
var lon;



// ' + userSearch + '
function getLatLon(userSearch) {
    var geoAPIurl = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=5&appid=${geoApiKey}`
    console.log("does search work?");
    
fetch(geoAPIurl) 

    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log("latlon", data[0])

    })};
        
    // getWeather(data[0]) })
function getCurrentWeather () {
    var currentWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=d2e2c17de561fb5216c9679df62394b5`
    
fetch(currentWeather)
    .then(function(response){
    return response.json();
    }).then(function(data){
        console.log(data);
        console.log("name",data.name)   
        console.log("temp",data.temp)
        console.log("windSpeed",data.wind.speed)
        console.log("humidity",data.main.humidity)

    })};



function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchInputVal.value) {
        console.log("Enter a City!", searchInputVal);
        return;}
    
    

    let userSearch = searchInputVal.value.trim();
    getLatLon(userSearch);
    console.log("added");

    };



// append elements to page
// create element with JS 
// append data from each card
// createElement.textcontent

var days = document.getElementById("city")
var city = document.getElementById("wind")
var temp = document.getElementById("temp")
var windSpeed = document.getElementById("humidity")
var humidity = document.getElementById("index")

    

 


// // add event listener to submit button
btnEl.addEventListener('submit', handleSearchSubmit)


// // APPEND TO PAGE 




