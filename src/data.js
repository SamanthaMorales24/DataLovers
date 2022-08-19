export const filtroEspecie = (characters) => {
  const noHumanos = characters.filter((element) => element.species !== "Human");
  return noHumanos;
};

export function sortAZ(data) {
  if (data.name) {
    const dataAux = data;
    let orderAZ = dataAux.sort((a, b) => (a.name > b.name ? 1 : -1));
    return orderAZ;
  } else {
    const dataAux = [...data];
    let orderAZ = dataAux.sort((a, b) => (a.type > b.type ? 1 : -1));
    return orderAZ;
  }
}

export function sortZA(data) {
  if (data.name) {
    const dataAux = [...data];
    let orderZA = dataAux.sort((a, b) => (a.name < b.name ? 1 : -1));
    return orderZA;
  } else {
    const dataAux = [...data];
    let orderZA = dataAux.sort((a, b) => (a.type < b.type ? 1 : -1));
    return orderZA;
  }
}
