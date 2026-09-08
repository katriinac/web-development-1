// STEP 1: Print text to the browser console is string ""
console.log("Hello world!");

// STEP 2: Variables
// Store text values in variables
const name = "Katriina";
let age = 24;
const favouriteAnimal = "Cat";

// Print the variables to the console
console.log("Hello! my name is " + name + ". I'm " + age + " and my favourite animal is a " + favouriteAnimal);

// STEP 3: User interaction

// Display a pop-up message
alert("Hello!")
// Ask the user for their name
let visitor = prompt("What is your name?");
// Print the user's answer

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
// Ask the user for their favorite animal

// Create a sentence using both answers
console.log("Soo.. your name is " + visitor + " and your age is "+ visitorAge)

let visitorAnimal = prompt("What is your favourite animal?")


// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
if (visitorAnimal.toLowerCase() == "blue elephant") {
    console.log("Great choice! That's my favorite animal too!")
} 
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?
else {
    console.log("Nice! Your favourite animal is " + visitorAnimal)
}

//functions
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