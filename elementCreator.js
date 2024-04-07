export function elementCreator(namesArray) {
  return namesArray.map((name) => {
    const h5 = document.createElement("h5");
    h5.textContent = name;
    return h5;
  });
}
