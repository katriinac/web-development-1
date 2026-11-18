const text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const data = JSON.parse(text);
const showname = document.getElementById("showname");
const showall = document.getElementById("showall");
const jsondata = document.getElementById("jsondata");

showname.addEventListener("click", function() {
    jsondata.innerHTML = "";
    let i = 0;
    while(i < data.employees.length){
        jsondata.innerHTML += data.employees[i].firstName + " " + data.employees[i].lastName + "<br>";
        i = i + 1;
    }
});

showall.addEventListener("click", function(){
    jsondata.innerHTML = "";
    let i = 0;
    while(i < data.employees.length){
        jsondata.innerHTML += "First name: " + data.employees[i].firstName + ", " + "Last name: " + data.employees[i].lastName + "<br>"
        i = i + 1;
    }
});

const loadraw = document.getElementById("loadraw");
const rawdata = document.getElementById("rawdata");

const link = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";

loadraw.addEventListener("click", function() {
    fetch(link)
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            rawdata.textContent = data;
        })
        .catch(function(error) {
            console.log("Error fetching data:", error);
        });
});

const loadparse = document.getElementById("loadparse");

loadparse.addEventListener("click", function() {
    fetch(link)
        .then(function(response) {
            return response.json();
        })
        .then(function(movies) {
            display(movies);
        })
        .catch(function(error) {
            console.log("Error fetching data:", error);
        });
});

function display(movies) {

    if (movies.Search) {
        const table = "<table>";
        table += "<tr><th>Title</th><th>Year</th><th>Type</th><th>Poster</th></tr>";
        const index = 0;
        while (index < movies.Search.length) {
            table += "<tr>";
            table += "<td>" + movies.Search[index].Title + "</td>";
            table += "<td>" + movies.Search[index].Year + "</td>";
            table += "<td>" + movies.Search[index].Type + "</td>";
            table += "<td><img src='" + movies.Search[index].Poster + "' width='200'></td>";
            table += "</tr>";
            index = index + 1;
        }
        table += "</table>";
        rawdata.innerHTML = table;
    }
}

const fetchButton = document.getElementById("fetch");
const weatherdata = document.getElementById("weatherdata");
const city = document.getElementById("city");
const api = "YOUR_API_KEY";
const search = document.getElementById("search");
const citysearch = document.getElementById("citysearch");

fetchButton.addEventListener("click", function() {
    getweather("");
});

city.addEventListener("change", function(){
    getweather("");
});

search.addEventListener("click", function(){
    const searchcity = citysearch.value;
    if (searchcity != ""){
        getweather(searchcity);
    }
});

function getweather(searchcity) {
    chosencity = city.value;
    if (searchcity != ""){
        chosencity = searchcity;
    }

    const uri = "http://api.openweathermap.org/data/2.5/weather?q=" + chosencity + "&units=metric&mode=JSON&APPID=" + api;
    fetch(uri)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            weatherdata.innerHTML =
            "Weather in " + data.name + "<br>" + "Temperature: " + data.main.temp + " C<br>" + "Clouds: " + data.clouds.all + " %<br>" + "Humidity: " + data.main.humidity + "%";
        })
        .catch(function(error) {
            console.log("Error fetching data:", error);
        });
}
