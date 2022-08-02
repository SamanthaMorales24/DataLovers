import { example } from './data.js';
import data from './data/harrypotter/data.js';
console.log(data.potions);

const potions = data.potions;


for(let i= 0; i< potions.length; i++ ){
    let potionsData = `<li>${potions[i].name}</li>`;
    

    document.getElementById("potions").innerHTML += potionsData;
    console.log(potions[i].name)
}
/*
for(let i= 0; i< potions.length; i++ ){
    let potionsData = `<p>${potions[i].description}</p>`;
    

    document.getElementById("potions").innerHTML += potionsData;
    console.log(potions[i].name)
}
*/