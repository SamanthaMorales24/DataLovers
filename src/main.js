import { filtroEspecie, sortAZ, sortZA, sortAZC, sortZAC } from "./data.js";
import data from "./data/harrypotter/data.js";
//se crean variables con spread para evitar mutaciones
const characters = [...data.characters];
const potions = [...data.potions];
const spells = [...data.spells];
const funFacts = [...data.funFacts];
// variable para identificar que datos tenemos en pantalla
let datosEnPantalla = 0;
// variable limpiar se crea para limpiar la data cuando se cambio de seccion
const limpiar = `<div></div>`;

const noHumanos = filtroEspecie(characters);
// renderItem toma la data y la muestra en pantalla, se crea una para cada tipo de dato y se arman las tarjetas de informacion con html
const renderItemPotions = (data) => {
  let id = data.id - 1;
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
  datosEnPantalla = 1; // identificador para cambiar el orden de la data por orden alfabetico
};

const renderItemSpells = (data) => {
  let id = data.id - 1;
  let nombre = spells[id].name;
  let otroNombre = spells[id].other_name;
  if (otroNombre === null) {
    otroNombre = "Información no disponible";
  }
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
  datosEnPantalla = 2;
};

const renderItemFunFacts = (data) => {
  let id = data.id - 1;
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
  datosEnPantalla = 3;
};

const renderItemSpecies = (data) => {
  let id = data.id - 1;
  let nombre = data.name;
  let especies = data.species;
  let ojos = data.eye_color;
  let pelaje = data.hair_color;

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
  datosEnPantalla = 4;
};
// se  crean las funciones
window.addEventListener("load", indice, leerMas, true);

function indice() {
  document.getElementById("pociones").addEventListener("click", function () {
    data.pociones = document.getElementById("libro").value;
    document.getElementById("libro").innerHTML = limpiar;
    potions.forEach((e) => renderItemPotions(e));
  });

  document.getElementById("hechizos").addEventListener("click", function () {
    data.spells = document.getElementById("libro").value;
    document.getElementById("libro").innerHTML = limpiar;
    spells.forEach((e) => renderItemSpells(e));
  });
  document
    .getElementById("datosCuriosos")
    .addEventListener("click", function () {
      data.facts = document.getElementById("libro").value;
      document.getElementById("libro").innerHTML = limpiar;
      funFacts.forEach((e) => renderItemFunFacts(e));
    });
  document.getElementById("criaturas").addEventListener("click", function () {
    data.characters = document.getElementById("libro").value;
    document.getElementById("libro").innerHTML = limpiar;
    noHumanos.forEach((e) => renderItemSpecies(e));
  });

  // se crea funcionon para ordenar de la A-Z, Z-A
  let select = document.querySelector(".seleccionOrden");

  select.addEventListener("change", (event) => {
    let resultado = event.target.value;
    console.log(resultado);
    let renderData = [];

    switch (datosEnPantalla) {
      case 1:
        switch (resultado) {
          case "az":
            renderData = sortAZ(potions);
            document.getElementById("libro").innerHTML = limpiar;
            data.az = document.getElementById("libro").value;
            renderData.forEach((e) => renderItemPotions(e));
            break;
          case "za":
            renderData = sortZA(potions);
            document.getElementById("libro").innerHTML = limpiar;
            data.za = document.getElementById("libro").value;
            renderData.forEach((e) => renderItemPotions(e));
            break;
        }

        break;

      case 2:
        switch (resultado) {
          case "az":
            renderData = sortAZ(spells);
            document.getElementById("libro").innerHTML = limpiar;
            data.az = document.getElementById("libro").value;
            renderData.forEach((e) => renderItemSpells(e));
            break;
          case "za":
            console.log("aqui");
            renderData = sortZA(spells);
            document.getElementById("libro").innerHTML = limpiar;
            data.za = document.getElementById("libro").value;
            renderData.forEach((e) => renderItemSpells(e));
            break;
        }

        break;
      case 3:
        switch (resultado) {
          case "az":
            renderData = sortAZC(funFacts);
            document.getElementById("libro").innerHTML = limpiar;
            data.az = document.getElementById("libro").value;
            renderData.forEach((e) => renderItemFunFacts(e));
            break;
          case "za":
            renderData = sortZAC(funFacts);
            document.getElementById("libro").innerHTML = limpiar;
            data.za = document.getElementById("libro").value;
            renderData.forEach((e) => renderItemFunFacts(e));
            break;
        }
        break;
      case 4:
        switch (resultado) {
          case "az":
            renderData = sortAZ(noHumanos);
            document.getElementById("libro").innerHTML = limpiar;
            data.az = document.getElementById("libro").value;
            renderData.forEach((e) => renderItemSpecies(e));
            break;
          case "za":
            renderData = sortZA(noHumanos);
            document.getElementById("libro").innerHTML = limpiar;
            data.za = document.getElementById("libro").value;
            renderData.forEach((e) => renderItemSpecies(e));
            break;
        }
        break;
      case 0:
        break;
    }
  });
}

function leerMas() {
  let hideText_btn = document.getElementById("hideText_btn");
  let hideText = document.getElementById("hideText");
  hideText_btn.addEventListener("click", toggleText);
  function toggleText() {
    hideText.classList.toggle("show");
  }
}
