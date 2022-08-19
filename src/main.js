import {
    filtroEspecie,
    sortAZC,
    sortAZP,
    sortZAC,
    sortZAP,
} from './data.js';
import data from './data/harrypotter/data.js';
//console.log(data.potions);

const limpiar = `<div></div>`;
const potions = data.potions;
const spells = data.spells;
const funFacts = data.funFacts;
const noHumanos = filtroEspecie(data.characters);
const orderZAC = sortAZC(data.characters);
const orderAZC = sortZAC(data.characters);
const orderAZP = sortAZP(data.potions);
const orderZAP = sortZAP(data.potions);
const orderAZH = sortAZP(data.spells);
const orderZAH = sortZAP(data.spells);
const orderAZF = sortAZP(data.funFacts);
const orderZAF = sortZAP(data.funFacts);

console.log(orderZAC);
console.log(orderAZC);
console.log(orderAZP);
console.log(orderZAP);
console.log(orderAZH);
console.log(orderZAH);
console.log(orderAZF);
console.log(orderZAF);

// const ordenar = (orden) => {
// switch (orden) {
//     case "az":
//         renderItemPotions(sortAZ(data))
//         break;

//     case "za":
//         renderItemPotions(sortZA(data))
//         break;
//     default:
//         break;
// }

// };

const renderItemPotions = (id) => {
    id = id - 1;
    let nombre = potions[id].name;
    let descripcion = potions[id].description;

    let poster = `
    
    <div class="container" id="tarjetita">
        <div class="card">
        <img id="fotoPocion" src= "./images/pocioncita.jpg" width="350" height="350">
        <h2 id="tituloTarjeta"> ${nombre}</h2>
        <p id="txtTarjeta">Descripción: ${descripcion}</p>
        <a href="#">Leer más</a>
        </div>
    </div> 
    `;

    document.getElementById("libro").innerHTML += poster;

};

const renderItemSpells = (id) => {
    id = id - 1;
    let nombre = spells[id].name;
    let otroNombre = spells[id].other_name;
    if (otroNombre === null) {
        otroNombre = "Información no disponible"
    };
    let pronunciacion = spells[id].pronunciation;
    let tipoHechizo = spells[id].spell_type;
    let descripcion = spells[id].description;
    let mencion = spells[id].mention;
    let etimologia = spells[id].etymology;

    let poster = `
    <div class="container" id="tarjetita">
    <div class="card">
    <img id="fotoHechizo" src= "./images/hechizofoto.jpg" width="350" height="350">
            <h2 id="tituloTarjeta"> ${nombre}</h2>
            <p id="txtTarjeta">Nombre Alternativo: ${otroNombre}</p>
            <span class="hide" id="hideText>
            <p id="txtTarjeta">Pronunciacion: ${pronunciacion}</p>
            <p id="txtTarjeta">Tipo de Hechizo: ${tipoHechizo}</p>
            <p id="txtTarjeta">Descripción: ${descripcion}</p>
            <p id="txtTarjeta">Mención: ${mencion}</p>
            <p id="txtTarjeta">Etimologia: ${etimologia}</p>
            </span>
            <button class="leer_btn" id="hideText_btn">Leer más</button>
            </div>
        </div> 
        `;

    document.getElementById("libro").innerHTML += poster;

};

const renderItemFunFacts = (id) => {
    id = id - 1;
    let tipo = funFacts[id].type;
    let contenido = funFacts[id].content;

    let poster = `
    <div class="container" id="tarjetita">
    <div class="card">
    <img id="fotoDato" src="./images/libroDato.jpg" width="350" height="350">
        
            <h2 id="tituloTarjeta">Dato: ${tipo}</h2>
            <p id="txtTarjeta">Sabias... ${contenido}</p>
            </div>
    
        `;

    document.getElementById("libro").innerHTML += poster;

};

const renderItemSpecies = (character) => {
    let nombre = character.name;
    let especies = character.species;
    let ojos = character.eye_color;
    let pelaje = character.hair_color;


    let poster = `
    <div class="container" id="tarjetita">
    <div class="card">
    <img id="fotoCriatura" src="./images/bestia.jpg" width="350" height="350">
               <h2 id="tituloTarjeta"> ${nombre}</h2>
           <p id="txtTarjeta">Especie: ${especies}</p>
           <p id="txtTarjeta">Color de Ojos: ${ojos}</p>
           <p id="txtTarjeta">Pelaje: ${pelaje}</p>
       
       `;

    document.getElementById("libro").innerHTML += poster;


};


window.addEventListener("load", indice, leerMas, true);

function indice() {
    document.getElementById("pociones").addEventListener("click", function () {
        data.pociones = document.getElementById("libro").value;
        document.getElementById("libro").innerHTML = limpiar;
        potions.forEach((e) => renderItemPotions(e.id));
    });

    document.getElementById("hechizos").addEventListener("click", function () {
        data.spells = document.getElementById("libro").value;
        document.getElementById("libro").innerHTML = limpiar;
        spells.forEach((e) => renderItemSpells(e.id));
    });
    document.getElementById("datosCuriosos").addEventListener("click", function () {
        data.facts = document.getElementById("libro").value;
        document.getElementById("libro").innerHTML = limpiar;
        funFacts.forEach((e) => renderItemFunFacts(e.id));
    });
    document.getElementById("criaturas").addEventListener("click", function () {
        data.characters = document.getElementById("libro").value;
        document.getElementById("libro").innerHTML = limpiar;
        noHumanos.forEach((e) => renderItemSpecies(e));
    });

};

function leerMas() {
    let hideText_btn = document.getElementById('hideText_btn');
    let hideText = document.getElementById('hideText');
    hideText_btn.addEventListener('click', toggleText);
    function toggleText() {
        hideText.classList.toggle('show');
    }

}
/*

for(let i= 0; i< potions.length; i++ ){
    let potionsData = `<    li><button name"${potions[i].id}" id= "indiceX" value="${potions[i].name}" >${potions[i].name}</button></li>`;
    document.getElementById("potions").innerHTML += potionsData;

}

// href="#libro"
document.getElementById("indiceX").addEventListener(
    "click",
    function () {
        let id = document.getElementById("indiceX").value;
        console.log(id);
    },
    true
  );
*/

// const traerDescripcion = (value) => {
//     let id2 = value;
//     console.log(id2);
//     // let id = potions.find(e => e =)
//     // let descripcion = `<p>${potions[].description}</p>`;
//     // document.getElementById("libro").innerHTML += descData;
// }



// for(let i= 0; i< potions.length; i++ ){
//     let descData = `<p>${potions[i].description}</p>`;
//     document.getElementById("libro").innerHTML += descData;
//     if (i < 150 ){
//         break
//     }
// }




   // console.log(potionsData);
/*
function init() {
    let a = document.createElement("a");
    a.setAttribute("href", "libro");
    let aTexto = document.createTextNode("Google");
    a.appendChild(aTexto);
    document.body.appendChild(a);
}
window.onload = init; */
/*
for(let i= 0; i< potions.length; i++ ){
    let potionsData = `<p>${potions[i].description}</p>`; 
*/