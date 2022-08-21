import { filtroEspecie, sortAZ, sortZA } from "./data.js";
import data from "./data/harrypotter/data.js";

const characters = [...data.characters];
const potions = [...data.potions];
const spells = [...data.spells];
const funFacts = [...data.funFacts];
let renderData = [];

const limpiar = `<div></div>`;
const noHumanos = filtroEspecie(characters);

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
  renderData[id] = data;
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
  renderData[id] = data;
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
  renderData[id] = data;
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
  renderData[id] = data;
};

window.addEventListener("load", indice, leerMas, true);

function indice() {
  document.getElementById("pociones").addEventListener("click", function () {
    data.pociones = document.getElementById("libro").value;
    document.getElementById("libro").innerHTML = limpiar;
    renderData = [];
    potions.forEach((e) => renderItemPotions(e));
    console.log(renderData);
  });

  document.getElementById("hechizos").addEventListener("click", function () {
    data.spells = document.getElementById("libro").value;
    document.getElementById("libro").innerHTML = limpiar;
    renderData = [];
    spells.forEach((e) => renderItemSpells(e));
    console.log(renderData);
  });
  document
    .getElementById("datosCuriosos")
    .addEventListener("click", function () {
      data.facts = document.getElementById("libro").value;
      document.getElementById("libro").innerHTML = limpiar;
      renderData = [];
      funFacts.forEach((e) => renderItemFunFacts(e));
      console.log(renderData);
    });
  document.getElementById("criaturas").addEventListener("click", function () {
    data.characters = document.getElementById("libro").value;
    document.getElementById("libro").innerHTML = limpiar;
    renderData = [];
    noHumanos.forEach((e) => renderItemSpecies(e));
    console.log(renderData);
  });

 
  let select = document.querySelector('.seleccionOrden');

  select.addEventListener('change', (event) => {
      let resultado = event.target.value;
      console.log(resultado)
      
      switch (resultado) {
        case 'az':
          renderData = sortAZ(renderData);
          document.getElementById("libro").innerHTML = limpiar;
          data.az = document.getElementById("libro").value;
          renderData.forEach((e) => renderItemPotions(e));
          break;
        case 'za':
          renderData = sortZA(renderData);
          document.getElementById("libro").innerHTML = limpiar;
          data.za = document.getElementById("libro").value;
          renderData.forEach((e) => renderItemPotions(e));
          break;
      }
  });
  //document.getElementById("botonOK").addEventListener("click", function () {
  // primero identificar que opcion del select está seleccionada
  // hacer un if para identificar que sort usar
  // if (opcionSeleccionada = "az") {
  //     let orderAZ = sortAZ(renderData);
  //     orderAZ.forEach((e) => renderItemPotions(e));
  // } else {
  //     let orderZA = sortZA(renderData);
  //     orderZA.forEach((e) => renderItemPotions(e));
  //     }
  //});
}

function leerMas() {
  let hideText_btn = document.getElementById("hideText_btn");
  let hideText = document.getElementById("hideText");
  hideText_btn.addEventListener("click", toggleText);
  function toggleText() {
    hideText.classList.toggle("show");
  }
}
