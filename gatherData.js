// parsing inputs` values and forming it for the local storage or for submission.
// can be expanded and can accept more unit properties and input values, as long as they are taken care of in the unitFileEditing.js , further down the road.

import { editTextFile } from "./unitFileEditing.js";

export function prepareUnitsData(inputValues) {
  const unitsData = [];
  console.log(inputValues);
  inputValues.forEach((input) => {
    const unitId = input.dataset.id;
    const name = input.name;
    const value = input.value;

    const unitIndex = unitsData.findIndex((unit) => unit.id === unitId);
    if (unitIndex === -1) {
      const newUnit = { id: unitId };
      newUnit[name] = value;
      unitsData.push(newUnit);
    } else {
      unitsData[unitIndex][name] = value;
    }
  });
  console.log("INPUT DATA GATHERED:");
  console.log(unitsData);
  return unitsData;
}

export function gatherInputData() {
  const form = document.querySelector("#Units");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputValues = form.querySelectorAll("input");

    const valuesForEditing = prepareUnitsData(inputValues);
    editTextFile(valuesForEditing);
  });
}
