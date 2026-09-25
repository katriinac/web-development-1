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

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent =
            "Tiikerit ovat suuria petoeläimiä.";
    }
    else if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elephnt";
        animalDescription.textContent =
            "Elefantit ovat maailman suurimpia maaeläimiä.";
    }
    else if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "penguin";
        animalDescription.textContent =
            "Pingviinit ovat söpöjä.";
    }
    else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "panda";
        animalDescription.textContent =
            "Pandat ovat isoja.";
    }

});

animalImage.addEventListener("mouseenter", function(){
    animalImage.classList.add("image-highlight");
});
animalImage.addEventListener("mouseleave", function(){
    animalImage.classList.remove("image-highlight");
});

const form = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTable = document.querySelector("#observationTableBody");

form.addEventListener("submit", function(event){
    event.preventDefault();

    if (
        observationAnimal.value === "" ||
        observationLocation.value === "" ||
        observationDate.value === ""
    ){
        alert("Yritä uudelleen.");
        return;
    }

    const row = document.createElement("tr");
    const aCell = document.createElement("td");
    const lCell = document.createElement("td");
    const dCell = document.createElement("td");

    aCell.textContent = observationAnimal.value;
    lCell.textContent = observationLocation.value;
    dCell.textContent = observationDate.value;

    row.append(aCell);
    row.append(lCell);
    row.append(dCell);

    observationTable.append(row);
});

