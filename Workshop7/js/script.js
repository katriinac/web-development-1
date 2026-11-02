var text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var data = JSON.parse(text);
var showname = document.getElementById("showname");
var showall = document.getElementById("showall");
var jsondata = document.getElementById("jsondata");

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

var loadraw = document.getElementById("loadraw");
var rawdata = document.getElementById("rawdata");

var link = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";

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

var loadparse = document.getElementById("loadparse");

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
        var table = "<table>";
        table += "<tr><th>Title</th><th>Year</th><th>Type</th><th>Poster</th></tr>";
        var index = 0;
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

var fetchButton = document.getElementById("fetch");
var weatherdata = document.getElementById("weatherdata");
var city = document.getElementById("city");
var api = "2fc2095e93132319e44e046ee47feaec";
var search = document.getElementById("search");
var citysearch = document.getElementById("citysearch");

fetchButton.addEventListener("click", function() {
    getweather("");
});

city.addEventListener("change", function(){
    getweather("");
});

search.addEventListener("click", function(){
    var searchcity = citysearch.value;
    if (searchcity != ""){
        getweather(searchcity);
    }
});

function getweather(searchcity) {
    chosencity = city.value;
    if (searchcity != ""){
        chosencity = searchcity;
    }

    var uri = "http://api.openweathermap.org/data/2.5/weather?q=" + chosencity + "&units=metric&mode=JSON&APPID=" + api;
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
