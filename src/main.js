import { example } from './data.js';
import data from './data/harrypotter/data.js';
//console.log(data.potions);

const potions = data.potions;
const descData = data.potions.description;


for(let i= 0; i< potions.length; i++ ){
    let potionsData = `<li><a href="#libro" id=" ${potions[i].id}">${potions[i].name}</a></li>`;
    
    document.getElementById("potions").innerHTML += potionsData;
    
    for(let i= 0; i< potions.length; i++ ){
        let descData = `<p>${potions[i].description}</p>`;
        document.getElementById("libro").innerHTML += descData;
    }
    
}
    
    
    console.log(potionsData);









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