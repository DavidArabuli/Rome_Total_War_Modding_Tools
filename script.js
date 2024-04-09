import { blockSplitter } from "./blockSplitter.js";
import { initialRender } from "./initialRender.js";
import { gatherInputData } from "./gatherData.js";
import {
  loadFromLocStorage,
  localStorageSetup,
  saveToLocalStorage,
} from "./localStorageFuncs.js";

async function getFile() {
  try {
    const response = await fetch("descr_unit.txt");
    const data = await response.text();
    console.log("data fetched");
    return data;
  } catch (error) {
    console.log("ERROR!", error);
  }
}

async function initializeApp() {
  const data = await getFile();
  if (data) {
    const splittedTextArray = blockSplitter(data);
    initialRender(splittedTextArray);
  } else {
    console.error("failed to fetch data");
  }
}

await initializeApp();
gatherInputData();
localStorageSetup();
// const saveBtn = document.querySelector("#saveBtn");
// saveBtn.addEventListener("click", () => {
//   saveToLocalStorage();
// });
// const loadBtn = document.querySelector("#loadBtn");
// loadBtn.addEventListener("click", () => {
//   loadFromLocStorage();
// });
