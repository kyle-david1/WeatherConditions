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
var searchInputEl = document.querySelector("#user-search")
// userSearch = 'Austin';
const btnEl = document.querySelector("#user-form");


var currentWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=d2e2c17de561fb5216c9679df62394b5`;


// var lat;
// var lon;



// ' + userSearch + '
function getLatLon() {
    event.preventDefault()
    let userSearch = searchInputEl.value.trim();
    console.log('return search', userSearch);
    var geoAPIurl = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=5&appid=${geoApiKey}`
    console.log("does search work?");
    
fetch(geoAPIurl) 

    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log("latlon", data[0])


        var lat = data[0].lat;
        var lon = data[0].lon;

    
        

// var currentWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=d2e2c17de561fb5216c9679df62394b5`
    
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=d2e2c17de561fb5216c9679df62394b5&units=imperial')
    .then(function(response){
    return response.json();
    }).then(function(data){
        console.log('second fetch', data);
        var name = data.name
        console.log("city name", name);
        var dateTime = data.current.dt;
        console.log("date and time", dateTime);
        var temp = data.current.temp;
        console.log("temp", temp) ; 
        var wind = data.current.wind_speed;
        console.log("wind speed", wind); 
        var humidity = data.current.humidity;
        console.log("humidity", humidity);  
        var uvi = data.current.uvi;
        console.log("uvi", uvi);
            
        // var dateEl = document.getElementById("day")
        // var cityEl = document.getElementById("city")
        // var tempEl = document.getElementById("temp")
        // var windSpeedEl = document.getElementById("humidity")
        // var humidityEl = document.getElementById("index")
        
        // dateEl.textContent = 

        // var forecastData = data.daily
        // for loop for the five day forecast
        // var dayDisplay = forecastData[i]

        // do variables for each of the components that we need from the daily weather
        // do variable that creates an element. dailytemp.textContent(displaydata)

    })

});
}



// append elements to page
// create element with JS 
// append data from each card
// createElement.textcontent


    

 


// // add event listener to submit button
btnEl.addEventListener('submit', getLatLon)







