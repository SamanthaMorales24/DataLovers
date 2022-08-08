import { example } from './data.js';
import data from './data/harrypotter/data.js';
//console.log(data.potions);

const potions = data.potions;
const descData = data.potions.description;




for(let i= 0; i< potions.length; i++ ){
    let potionsData = `<li><button name"${potions[i].id}" id= "indiceX" value="${potions[i].name}" >${potions[i].name}</button></li>`; 
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