// Store your OpenWeatherMap API key.
const apiKey = "2fc2095e93132319e44e046ee47feaec"


// Find the HTML element where we display the weather data.
const weatherdata = document.querySelector("#weatherdata");


// Run this function when the user clicks the "Fetch data" button.
// async allows us to use await inside the function.
document.querySelector("#fetchWeather").addEventListener("click", async function() {

     // Display a loading message.
    weatherdata.textContent = "Loading the weather data...";

    // Try to fetch and process the weather data.
    try {


        // Send a GET request to the weather API and wait for the response.
        // q=Helsinki selects the city.
        // units=metric gives the temperature in Celsius.
        // mode=xml requests the data in XML format.
        // ${apiKey} inserts our API key into the URL.
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=xml&APPID=${apiKey}`
        );

        // Check whether the API returned a successful HTTP status.
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
         // Create an error and jump to the catch block.
        
         //parsing xml data
        // Read the response body as text and wait until it is ready.
        const xmlText = await response.text();

        //convert the xml text into document we can search
        const xml = new DOMParser().parseFromString(xmlText, "application/xml");

        //find the temperature element in the XML document.
        const temperatureElement = xml.querySelector("temperature");

        //read the value attribute
        const temperature = temperatureElement.getAttribute("value");

        //display only the temp
        weatherdata.textContent = `Temperature in Helsinki: ${temperature} C`;

        // Display the XML as plain text on the page.
        //weatherdata.textContent = xmlText;

    // Handle errors from the request or the code above.
    } catch(error){
        //set the error msg to console
        const message = `Error fetching weather sata: ${error.message}`;
        console.log(message);
        // Display the message and details of the error.
        weatherdata.textContent = `Error: ${error.message}`;
    }
});
