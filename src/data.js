export const filtroEspecie = (characters) => {
  const noHumanos = characters.filter((element) => element.species !== "Human");
  return noHumanos;
};

export function sortAZ(data) {
  const dataAux = data;
  let orderAZ = dataAux.sort((a, b) => (a.name > b.name ? 1 : -1));
  return orderAZ;
}

export function sortZA(data) {
  const dataAux = [...data];
  let orderZA = dataAux.sort((a, b) => (a.name < b.name ? 1 : -1));
  return orderZA;
}

export function sortAZC(data) {
  const dataAux = data;
  let orderAZ = dataAux.sort((a, b) => (a.type > b.type ? 1 : -1));
  return orderAZ;
}

export function sortZAC(data) {
  const dataAux = [...data];
  let orderZA = dataAux.sort((a, b) => (a.type < b.type ? 1 : -1));
  return orderZA;
}
