# WeatherConditions

As a user, I want to enter a city name and be shown the current weather.
As a user, I want to see the 5 day forecast for a location.

Enter city into search bar and be returned with weather information for current conditions 
as well as 5 days into the future. 

This website derives functionality from the open weather API site.
Two API calls were made using fetch method to CurrentWeatherAPI and GeoAPI on the OneWeather API platform.
GeoAPI was needed to gain a locations coordinates, in order to access the weather for those coordinates.

future developments will include color-coded icons, as well as a for-loop in JS to avoid redundant code. 
UV index displays empty when UV index = 0.