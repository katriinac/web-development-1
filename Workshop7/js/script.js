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