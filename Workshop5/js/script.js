// WS05 student starter / opiskelijan aloituspohja
// Complete the TODOs. This file is intentionally unfinished.
// Täydennä TODO-kohdat. Tämä tiedosto on tarkoituksella keskeneräinen.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Clear previous errors / Tyhjennä edelliset virheet.
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";
    // TODO: Read and trim values / Lue ja trimmaa kenttien arvot.
    const aName = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();
    // TODO: Validate and show errors / Validoi ja näytä virheet.
    let validation = true;

    if (aName === ""){
        nameError.textContent = "Please enter the animal's name.";
        validation = false
    }
    if (species === ""){
        speciesError.textContent = "Please enter the species.";
        validation = false
    }
    if (note.length < 1 || note.length > 150){
        noteError.textContent = "The note must contain 1-150 characters."
        validation = false;
    }
    // TODO: If valid, show the result / Näytä hyväksytty tulos.
    if (validation === false){
        return;
    }
    formResult.textContent = "Animal added: " + aName + " (" + species + ")";
    // TODO: Create { name, species, note } and save it as JSON.
    const animal = {name : aName, species: species, note: note
    };
    localStorage.setItem("ws05Animal", JSON.stringify(animal));
});

// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Convert input values with Number().
    const annualFee = Number(animalType.value);
    const years = Number(yearsInput.value);

    if(years < 1 || years % 1 !== 0 || yearsInput.value.trim() === ""){
        cost.textContent = "Enter a positive whole number";
        discountMessage.textContent = "";
        return;
    }
    // TODO: Calculate the price and apply discounts.
    let total = annualFee * years;
    let discount = 0;

    if(years > 2){
        discount = total * 0.20;
        total = total - discount;
    }
    if (years >= 5){
        total = total - 5;
        discount = discount + 5;
    }
    // TODO: Show the result / Näytä tulos.
    cost.textContent = "Total: " + total.toFixed(2) + "€";

    if (discount > 0) {
        discountMessage.textContent = "You saved " + discount.toFixed(2) + "€";
    }
    else{
        discountMessage.textContent = "No discounts";
    }
});

// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    // TODO: Read ws05Animal. Handle null before using JSON.parse().
    const saveData = localStorage.getItem("ws05Animal");
    if(saveData === null){
        savedAnimal.textContent = "No animals saved";
        return;
    }

    const animal = JSON.parse(saveData);
    // TODO: Display name, species and note with textContent.
    savedAnimal.textContent = "Name: " + animal.name + " Species: " + animal.species + " Care Note: " + animal.note;
}

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {
    // TODO: Remove ws05Animal and update the displayed result.
    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "No saved animal yet";
});

// TODO: Call loadAnimal() here to restore data when the page opens.
loadAnimal();
// TODO: Kutsu loadAnimal() tässä, jotta tiedot palautuvat sivun avautuessa.
