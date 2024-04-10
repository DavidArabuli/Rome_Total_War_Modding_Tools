// all the logic that goes into changing original text file with values provided by user input.
// Since it relies on regex, expanding it requires adding similar blocks.
// because there is a lot on "non-uniqueness" and repetitive values\parameters in the unit text file  - we have to be precise and extra safe.

import { blockSplitter } from "./blockSplitter.js";
import { linkCreator } from "./downloadLinkCreator.js";
export async function editTextFile(submittedInputValues) {
  async function getFile() {
    try {
      const response = await fetch("export_descr_unit.txt");
      const data = await response.text();
      console.log("data fetched for editing");
      const splittedTextArray = blockSplitter(data);

      return splittedTextArray;
    } catch (error) {
      console.log("ERROR!", error);
    }
  }
  const fileData = await getFile();

  const matchedIds = new Set();
  const ArrayFileData = fileData.map((element) => element.split("\n"));

  ArrayFileData.forEach((array) => {
    submittedInputValues.forEach((item) => {
      if (!matchedIds.has(item.id)) {
        const regexPattern = new RegExp(`\\s{2,}${item.id}(?:\\n|\\r|$)`);

        const isMatch = array.some((str) => regexPattern.test(str));
        if (isMatch) {
          const attackPrimaryValue = item.attackPrimary;
          const attackSecondaryValue = item.attackSecondary;
          const defenceValue = item.defence;

          array.forEach((str, index) => {
            switch (true) {
              case str.startsWith("stat_pri_armour "):
                const regex = /^stat_pri_armour\s+(\d+)/;
                array[index] = str.replace(
                  regex,
                  `stat_pri_armour  ${defenceValue}`
                );
                break;
              case str.includes("stat_pri"):
                const priRegex = /stat_pri\s+(\d+)/;
                array[index] = str.replace(
                  priRegex,
                  `stat_pri         ${attackPrimaryValue}`
                );
                break;
              case str.includes("stat_sec"):
                const secRegex = /stat_sec\s+(\d+)/;
                array[index] = str.replace(
                  secRegex,
                  `stat_sec         ${attackSecondaryValue}`
                );
                break;
              default:
                break;
            }
          });
          matchedIds.add(item.id);
        }
      }
    });
  });

  console.log(ArrayFileData);
  const editedText = ArrayFileData.map((arr) => arr.join("\n")).join(
    "\r\n \r\n"
  );

  linkCreator(editedText);
}
