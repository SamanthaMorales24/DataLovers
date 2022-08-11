// estas funciones son de ejemplo

import data from "./data/harrypotter/data.js";


export const filtroEspecie = (characters) => {

  const noHumanos = characters.filter(
    (element) => element.species !== "Human"
  );
  return noHumanos;

};

function ordenarAtoZ (a, b){
  return a - b;
}



