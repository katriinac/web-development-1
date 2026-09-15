const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", function(){
    alert("You clicked me!");
});

button2.addEventListener("click",function (){
    showTable();
});
function showTable(){
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";
    const animal2 = "Norsu";
    const habitat2 = "Savanni";
    const diet2 = "Kasvit";

    const table = `
        <table>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
            <tr>
                <td>${animal2}</td>
                <td>${habitat2}</td>
                <td>${diet2}</td>
            </tr>
        </table>
    `;

    const container = document.querySelector("#tableContainer");
    container.innerHTML = table;
};
const harjoitus2 = document.querySelector("#harjoitus2");
harjoitus2.addEventListener("mouseover", function(){
    console.log("Stepped over me with a mouse!")
});

const otsikko1 = document.querySelector("#otsikko1");
otsikko1.addEventListener("click", function (){
    otsikko1.style.color ="red";
    otsikko1.innerHTML ="Bye bye mouse!";
});