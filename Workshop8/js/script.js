const apiKey = "YOUR_API_KEY"
const weatherdata = document.querySelector("#weatherdata");

async function getweather(city) {

    weatherdata.textContent = "Loading the weather data...";

    try {

        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=xml&APPID=${apiKey}`
        );

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const xmlText = await response.text();

        const xml = new DOMParser().parseFromString(xmlText, "application/xml");

        const temperatureElement = xml.querySelector("temperature");
        const temperature = temperatureElement.getAttribute("value");

        const cloudsElement = xml.querySelector("clouds");
        const clouds = cloudsElement.getAttribute("value");

        const humidityElement = xml.querySelector("humidity");
        const humidity = humidityElement.getAttribute("value");

        weatherdata.textContent = `Temperature in ${city}: ${temperature} C, Clouds: ${clouds}, Humidity: ${humidity}`;

    } catch(error){
        const message = `Error fetching weather sata: ${error.message}`;
        console.log(message);
        weatherdata.textContent = `Error: ${error.message}`;
    }
}

document.querySelector("#fetchWeather").addEventListener("click", function(){
    const city = document.querySelector("#city").value;
    getweather(city);
});

document.querySelector("#city").addEventListener("change", function(){
    const city = document.querySelector("#city").value;
    getweather(city);
});

document.querySelector("#search").addEventListener("click", function(){
    const city = document.querySelector("#citysearch").value.trim();
    if (city != ""){
        getweather(city);
    }
    else{
        weatherdata.textContent = "You must enter the city name before searching..."
    }
});
