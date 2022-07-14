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
var cityEl = document.getElementById('city');
var dateEl = document.getElementById('date');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');
var indexEl = document.getElementById('index');

var date1El = document.getElementById('date1');
var temp1El = document.getElementById('temp1');
var wind1El = document.getElementById('wind1');
var humidity1El = document.getElementById('humidity1');

var date2El = document.getElementById('date2');
var temp2El = document.getElementById('temp2');
var wind2El = document.getElementById('wind2');
var humidity2El = document.getElementById('humidity2');

var date3El = document.getElementById('date3');
var temp3El = document.getElementById('temp3');
var wind3El = document.getElementById('wind3');
var humidity3El = document.getElementById('humidity3');

var date4El = document.getElementById('date4');
var temp4El = document.getElementById('temp4');
var wind4El = document.getElementById('wind4');
var humidity4El = document.getElementById('humidity4');

var date5El = document.getElementById('date5');
var temp5El = document.getElementById('temp5');
var wind5El = document.getElementById('wind5');
var humidity5El = document.getElementById('humidity5');

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

    
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=d2e2c17de561fb5216c9679df62394b5&units=imperial')
    .then(function(response){
    return response.json();
    }).then(function(data){
        console.log('second fetch', data);
        
        cityEl.textContent= userSearch.value
        console.log("city", userSearch);
        
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
        //  since cityEl comes from another API call, do I need to put this text content in the first API call so it wont be undefined
        cityEl.textContent = (data.name);
        dateEl.textContent = (data.current.dt);
        tempEl.textContent = (data.current.temp);
        windEl.textContent = (data.current.wind_speed);
        humidityEl.textContent = (data.current.humidity);
        indexEl.textContent = (data.current.index);

        date1El.textContent = (data.daily[0].dt);
        temp1El.textContent = (data.daily[0].temp.day);
        wind1El.textContent = (data.daily[0].wind_speed);
        humidity1El.textContent = (data.daily[0].humidity);

        date2El.textContent = (data.daily[1].dt);
        temp2El.textContent = (data.daily[1].temp.day);
        wind2El.textContent = (data.daily[1].wind_speed);
        humidity2El.textContent = (data.daily[1].humidity);

        date3El.textContent = (data.daily[2].dt);
        temp3El.textContent = (data.daily[2].temp.day);
        wind3El.textContent = (data.daily[2].wind_speed);
        humidity3El.textContent = (data.daily[2].humidity);

        date4El.textContent = (data.daily[3].dt);
        temp4El.textContent = (data.daily[3].temp.day);
        wind4El.textContent = (data.daily[3].wind_speed);
        humidity4El.textContent = (data.daily[3].humidity);

        date5El.textContent = (data.daily[4].dt);
        temp5El.textContent = (data.daily[4].temp.day);
        wind5El.textContent = (data.daily[4].wind_speed);
        humidity5El.textContent = (data.daily[4].humidity);

        
        
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







