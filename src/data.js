// estas funciones son de ejemplo

import data from "./data/harrypotter/data.js";


export const filtroEspecie = (characters) => {

  const noHumanos = characters.filter(
    (element) => element.species !== "Human"
  );
  return noHumanos;

};
 /*
export const ordenarAtoZ = (a, b) => {
  const pocionesAZ = potions.function (a, b) {
    return a.localeCompare(b);

  pociones.sort()
  return a - b;

  console.log(pociones)
}*/

export const sortDataUp = (potions) => {
  let filterByAZ = potions.sort((a,b) => a.potions.localeCompare(b.potions));
  
  return filterByAZ;  
}



