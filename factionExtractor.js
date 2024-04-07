export function factionExtractor(allUnitObjects) {
  const uniqueFactions = new Set();
  allUnitObjects.forEach((item) => {
    if (!item.isShip) {
      const factionFormatted = item.faction.split(/\s*,\s*/);
      factionFormatted.forEach((item) => {
        const commonPart = item.match(/^([^_]+)/)[1];
        const normalizedCommonPart = commonPart.replace(/_/g, " ");
        if (normalizedCommonPart.includes("roman")) {
          uniqueFactions.add("romans");
        } else {
          uniqueFactions.add(normalizedCommonPart);
        }

        console.log(normalizedCommonPart);
      });
    }
  });

  console.log(uniqueFactions);
  return uniqueFactions;
}
