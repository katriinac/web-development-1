
console.log("Hello world!");

const name = "Katriina";
let age = 24;
const favouriteAnimal = "Cat";

console.log("Hello! my name is " + name + ". I'm " + age + " and my favourite animal is a " + favouriteAnimal);

let visitor = prompt("What is your name?");

if (visitor != null) {
    console.log("Hello " + visitor + "! Thanks for visiting my site!");
}

let visitorAge = prompt("How old are you?");

if (visitorAge >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are under 18.");
}

function greetUser(name) {
    console.log("Hello " + name + "!");
}
greetUser("John");
greetUser("Katriina");
greetUser("Victor");

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("You pressed the button!");
});