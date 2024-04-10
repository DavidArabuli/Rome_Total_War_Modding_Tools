// this file handles initial render

import { createInitialUnitObject } from "./createUnitObject.js";
import { elementCreator } from "./elementCreator.js";

export async function initialRender(data) {
  try {
    const unitsDiv = document.getElementById("Units");
    const newArray = await data;

    // first 2 blocks in a text file are just instructions
    // non-combatant - are citizen models in a town view, so they are excluded along with naval units

    const itemsToRender = newArray.filter(
      (item) =>
        !item.includes("non_combatant") &&
        !item.includes("naval") &&
        item !== data[0] &&
        item !== data[1] &&
        item !== ""
    );
    // itemsToRender is an array of strings, each string contains block of text with all the info about unit. Then we split it further to be able to start object creating.
    // this functionality relies on file structure of original  Rome Total War export_descr_unit file and its flags.

    const unitsBlockArray = itemsToRender.map((element) => element.split("\n"));

    const allUnitObjects = unitsBlockArray.map((item) =>
      createInitialUnitObject(item)
    );

    allUnitObjects.forEach((item) => {
      elementCreator(item);
    });
    console.log(allUnitObjects);
  } catch (error) {
    console.error("Error:", error);
  }
}
