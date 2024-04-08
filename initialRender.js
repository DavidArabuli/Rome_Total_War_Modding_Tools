import { blockSplitter } from "./blockSplitter.js";
import { createUnitObject } from "./createUnitObject.js";
import { elementCreator } from "./elementCreator.js";
import { factionExtractor, factionFormatter } from "./factionExtractor.js";

export async function initialRender(data) {
  try {
    const unitsDiv = document.getElementById("Units");
    const newArray = await data;
    const itemsToRender = newArray.filter(
      (item) =>
        !item.includes("non_combatant") &&
        !item.includes("naval") &&
        item !== data[0] &&
        item !== data[1] &&
        item !== ""
    );

    const unitsBlockArray = itemsToRender.map((element) => element.split("\n"));
    const allUnitObjects = unitsBlockArray.map((item) =>
      createUnitObject(item)
    );

    // Extract unique factions
    const uniqueFactionsSet = factionExtractor(allUnitObjects);

    // Create faction divs
    uniqueFactionsSet.forEach((faction) => {
      const factionElement = document.createElement("div");
      factionElement.textContent = faction;
      factionElement.classList.add(faction);
      unitsDiv.appendChild(factionElement);
    });

    // Add non-naval units to faction divs
    allUnitObjects.forEach((item) => {
      elementCreator(item, uniqueFactionsSet);
    });

    console.log(allUnitObjects);
    const test = document.querySelectorAll("h5");
    // console.log(test);
  } catch (error) {
    console.error("Error:", error);
  }
}
