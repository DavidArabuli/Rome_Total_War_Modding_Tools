import { prepareUnitsData } from "./gatherData.js";

export function saveToLocalStorage() {
  const form = document.querySelector("#Units");
  const inputValues = form.querySelectorAll("input");

  const unitsData = prepareUnitsData(inputValues);
  localStorage.setItem("unitsData", JSON.stringify(unitsData));
}

export function loadFromLocStorage() {
  const retrievedData = localStorage.getItem("unitsData");
  const unitsObjects = JSON.parse(retrievedData);
  console.log("retrieved data");
  console.log(unitsObjects);
  return unitsObjects;
}

export function repopulateInputsFromLocStor(parsedData) {
  document.querySelectorAll("input").forEach((input) => {
    parsedData.forEach((obj) => {
      if (input.dataset.id === obj.id) {
        switch (input.name) {
          case "attackPrimary":
            input.value = obj.attackPrimary;
            break;
          case "attackSecondary":
            input.value = obj.attackSecondary;
            break;
          case "defence":
            input.value = obj.defence;
            break;

          default:
            break;
        }
      }
    });
  });
}

export function localStorageSetup() {
  const saveBtn = document.querySelector("#saveBtn");
  saveBtn.addEventListener("click", () => {
    saveToLocalStorage();
  });
  const loadBtn = document.querySelector("#loadBtn");
  loadBtn.addEventListener("click", () => {
    repopulateInputsFromLocStor(loadFromLocStorage());
  });
}
