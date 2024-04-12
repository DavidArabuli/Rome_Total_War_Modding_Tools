// main script for the app.

import { blockSplitter } from "./blockSplitter.js";
import { initialRender } from "./initialRender.js";
import { gatherInputData } from "./gatherData.js";
import { localStorageSetup } from "./localStorageFuncs.js";

async function getFile() {
  try {
    const response = await fetch("export_descr_unit.txt");
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

const expandBtns = document.querySelectorAll(".expandDiv button");

// open class adds display flex, instead of display:none

expandBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const factionDiv = e.target.parentElement.nextElementSibling;
    console.log(factionDiv);
    factionDiv.classList.toggle("open");
    btn.textContent = factionDiv.classList.contains("open")
      ? "Collapse"
      : "Expand";
  });
});
