const changeHeading = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");
changeHeading.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

const changeStyle = document.querySelector("#changeStyleButton");
changeStyle.addEventListener("click", function (){
    taskOneHeading.classList.toggle("highlight");
});

const changeText = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");
changeText.addEventListener("click", function (){
    animalText.textContent = "Tiikerit ovat suuria petoeläimiä.";
});

const animalContent = document.querySelector("#animalContent");
const animalH3 = document.createElement("h3");
animalH3.textContent = "Päivän eläin.";

const animalPara = document.createElement("p");
animalPara.textContent = "Isot kissat ovat söpöjä";

const animalImg = document.createElement("img");
animalImg.src = "images/tiger.png";
animalImg.alt = "Tiger";

animalContent.append(animalH3);
animalContent.append(animalPara);
animalContent.append(animalImg);

animalH3.classList.add("animal-heading");

const hideAnimal =document.querySelector("#hideAnimalButton");
const showAnimal = document.querySelector("#showAnimalButton");

hideAnimal.addEventListener("click", function(){
    animalContent.hidden = true;
});

showAnimal.addEventListener("click", function(){
    animalContent.hidden = false;
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("Button Pressed");
});


// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {

    const selectedAnimal = animalSelect.value;

    // function to update the DOM based on the selected animal

    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent =
            "Tigers are the largest members of the cat family.";
    }

});
