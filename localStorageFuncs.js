import { prepareUnitsData } from "./gatherData.js";

export function saveToLocalStorage() {
  const form = document.querySelector("#Units");
  const inputValues = form.querySelectorAll("input");
  console.log(inputValues);
  const unitsData = prepareUnitsData(inputValues);
  localStorage.setItem("unitsData", JSON.stringify(unitsData));
}

export function loadFromLocStorage() {
  const retrievedData = localStorage.getItem("unitsData");
  const unitsObjects = JSON.parse(retrievedData);
  console.log("retrieved data");
  console.log(unitsObjects);
}
export function localStorageSetup() {
  const saveBtn = document.querySelector("#saveBtn");
  saveBtn.addEventListener("click", () => {
    saveToLocalStorage();
  });
  const loadBtn = document.querySelector("#loadBtn");
  loadBtn.addEventListener("click", () => {
    loadFromLocStorage();
  });
}
