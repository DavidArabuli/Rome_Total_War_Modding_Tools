const objArray = [
  { insideName: "barbarian", faction: "rome" },
  { insideName: "legio", faction: "rome" },
  { insideName: "peasant", faction: "rome" },
];
const inpArray = [
  { id: "barbar", attack: 2 },
  { id: "legio", attack: 4 },
  { id: "peas", attack: 5 },
];

export function findMissingIds(objArray, inpArray) {
  const missingIds = [];

  objArray.forEach((obj) => {
    const found = inpArray.some((inp) => inp.id === obj.insideName);

    if (!found) {
      missingIds.push(obj.insideName);
    }
  });
  console.log(missingIds);
  return missingIds;
}

const missingIds = findMissingIds(objArray, inpArray);
console.log(missingIds);
