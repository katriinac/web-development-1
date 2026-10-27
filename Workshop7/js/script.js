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


