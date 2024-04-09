import { createInitialUnitObject } from "./createUnitObject.js";
import { elementCreator } from "./elementCreator.js";

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
