import data from "./data/harrypotter/data.js";


export const filtroEspecie = (characters) => {

  const noHumanos = characters.filter(
    (element) => element.species !== "Human"
  );
  return noHumanos;

};
/*
export const sortAZ = (data(name)) => {

const orderAZ = name.sort((a, b) => a - b);
return orderAZ;
};

export const sortZA = (name) => {

const orderZA = name.sort((a, b) => b - a);
return orderZA;
};
*/
/*
const sortAZ=(Data,sortBy) => {
  let orderAZ = name.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
  })
  return orderAZ;
}
export { sortAZ };

const sortZA=(Data,sortBy) => {
  let orderZA = data.sort(function (a,b){
    if (a[sortBy]>b[sortBy]){
      return -1;
    }
    if (a[sortBy]<b[sortBy]){
      return 1;
    }
  })
  return orderZA;
}
export { sortZA };
*/

export function sortAZC(name) {
  let orderAZC = name.sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(orderAZC)
  return orderAZC;
}

export function sortZAC(name) {
  let orderZAC = name.sort((a, b) => (a.name > b.name ? -1 : 1));
  console.log(orderZAC)
  return orderZAC;
}

export function sortAZP(name) {
  let orderAZP = name.sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(orderAZP)
  return orderAZP;
}

export function sortZAP(name) {
  let orderZAP = name.sort((a, b) => (a.name > b.name ? -1 : 1));
  console.log(orderZAP)
  return orderZAP;
}
export function sortAZH(name) {
  let orderAZH = name.sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(orderAZH)
  return orderAZH;
}

export function sortZAH(name) {
  let orderZAH = name.sort((a, b) => (a.name > b.name ? -1 : 1));
  console.log(orderZAH)
  return orderZAH;
}
export function sortAZF(name) {
  let orderAZF = name.sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(orderAZF)
  return orderAZF;
}

export function sortZAF(name) {
  let orderZAF = name.sort((a, b) => (a.name > b.name ? -1 : 1));
  console.log(orderZAF)
  return orderZAF;
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



