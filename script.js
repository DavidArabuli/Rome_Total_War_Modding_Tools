import { blockSplitter } from "./blockSplitter.js";
import { createUnitObject } from "./createUnitObject.js";
import { factionExtractor } from "./factionExtractor.js";
import { elementCreator } from "./elementCreator.js";
import { initialRender } from "./initialRender.js";

async function getFile() {
  const response = await fetch("export_descr_unit.txt");
  const data = await response.text();
  console.log("data from data");
  const splittedTextArray = blockSplitter(data);
  // console.log(splittedTextArray);

  initialRender(splittedTextArray);
  // return splittedTextArray;
}
getFile();
