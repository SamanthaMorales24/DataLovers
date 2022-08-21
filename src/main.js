//importar funciones y data
import { filtroEspecie, sortAZ, sortZA } from "./data.js";
import data from "./data/harrypotter/data.js";

//generamos variables para las datas que se verán en la página al seleccionar
const characters = [...data.characters];
const potions = [...data.potions];
const spells = [...data.spells];
const funFacts = [...data.funFacts];
const noHumanos = filtroEspecie(characters);
//data vacía para que se trabaje con la data que se muestre en pantalla.
let renderData = [];

//variable que limpia la página de información con div vacio.
const limpiar = `<div></div>`;

//función que carga la información de pociones
const renderItemPotions = (data) => {
    let id = data.id - 1;
    let nombre = potions[id].name;
    let descripcion = potions[id].description;

    //interpolación que crea los divs con información de cada data con las propiedades descritas.
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

//función que carga la información de hechizos.
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

    //interpolación con span para que no deforme la página con exceso de texto.
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
    //esto imprime las targetas en el contenedor de la página.
    document.getElementById("libro").innerHTML += poster;
    renderData[id] = data;
};

//función que carga la información de datos curiosos.
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
//función que carga la información de criaturas mágicas.
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
//acción para leer más en data hechizo.
window.addEventListener("load", indice, leerMas, true);

//función que carga la data cuando se hace click en la categoria.
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

    /*
    let select = document.getElementById('seleccion');
    select.addEventListener('change', function () {
        let selectedOption = this.options[select.selectedIndex];
        console.log(selectedOption);
    });
        let selectAZ = document.getElementById("seleccion");
        function select() {
            console.log(selectAZ.selectedOptions[0].value);
        };
        document.getElementById("libro").innerHTML;
 
        //   primero identificar que opcion del select está seleccionada
        //   hacer un if para identificar que sort usar
        console.log(selectAZ);
        /*  if (selectAZ = "az") {
              const orderAZ = sortAZ(renderData);
              orderAZ.forEach((e) => renderItemPotions(e));
          } else {
              renderData.reverse();
              //const orderZA = sortZA(renderData);
              //orderZA.forEach((e) => renderItemPotions(e));
          }
        // console.log(renderData.reverse());
    });*/

};

function leerMas() {
    let hideText_btn = document.getElementById("hideText_btn");
    let hideText = document.getElementById("hideText");
    hideText_btn.addEventListener("click", toggleText);
    function toggleText() {
        hideText.classList.toggle("show");
    }
}
