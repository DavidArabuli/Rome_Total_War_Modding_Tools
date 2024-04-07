import { blockSplitter } from "./blockSplitter.js";
import { createUnitObject } from "./createUnitObject.js";
import { factionExtractor } from "./factionExtractor.js";
import { elementCreator } from "./elementCreator.js";

function addFaction(allUnitObjects) {
  const mainElement = document.getElementById("Units");
  allUnitObjects.forEach((item) => {
    if (item.faction.includes("egypt")) {
      const h5element = document.createElement("h5");
      console.log(h5element);
      h5element.innerText = item.insideName;
      mainElement.appendChild(h5element);
    }
  });
}

async function getFile() {
  const response = await fetch("descr_unit.txt");
  const data = await response.text();
  console.log("data from data");
  const splittedTextArray = blockSplitter(data);
  // console.log(splittedTextArray);

  return splittedTextArray;
}

function getAllUnitNames(unitsBlockArray) {
  const allNames = unitsBlockArray.map((item) => {
    const fullName = item[1].split(/\s{2,}/);
    const formattedName = fullName[2].replace(/;\s*/, "");
    const renderedName = formattedName;
    // console.log(item);

    console.log(renderedName);
    return renderedName;
  });
}

getFile().then((data) => {
  const itemsToRender = data.filter(
    (item) =>
      !item.includes("non_combatant") &&
      item !== data[0] &&
      item !== data[1] &&
      item !== ""
  );

  const unitsBlockArray = itemsToRender.map((element) => {
    return element.split("\n");
  });
  const allUnitObjects = unitsBlockArray.map((item) => {
    return createUnitObject(item);
  });
  // console.log(allUnitObjects);

  factionExtractor(allUnitObjects);
  // addFaction(allUnitObjects);
});
