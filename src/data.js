// estas funciones son de ejemplo

import data from "./data/harrypotter/data.js";


export const filtroEspecie = (characters) => {

  const noHumanos = characters.filter(
    (element) => element.species !== "Human"
  );
  return noHumanos;

};

export function sortAZ(name){
  let orderAZ = name.sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(orderAZ)
  return orderAZ
  
}

export function sortZA(name){
  let orderZA = name.sort((a, b) => (a.name > b.name ? -1 : 1));
  console.log(orderZA)
  return orderZA;
}
 /*
export const ordenarAtoZ = (a, b) => {
  const pocionesAZ = potions.function (a, b) {
    return a.localeCompare(b);

  pociones.sort()
  return a - b;

  console.log(pociones)
}*/

// export const sortDataUp = (potions) => {
//   let filterByAZ = potions.sort((a,b) => a.potions.localeCompare(b.potions));
//   return filterByAZ;  
// }



