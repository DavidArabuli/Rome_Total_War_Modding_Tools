export function factionExtractor(allUnitObjects) {
  const uniqueFactions = new Set();
  allUnitObjects.forEach((item) => {
    if (!item.isShip) {
      const flatFactions = item.faction.flat();

      flatFactions.forEach((faction) => {
        if (
          faction === "romans_julii" ||
          faction === "romans_brutii" ||
          faction === "romans_scipii" ||
          faction === "roman" ||
          faction === "romans_senate"
        ) {
          uniqueFactions.add("romans");
        } else if (faction === "eastern") {
          return;
        } else if (faction === "greek_cities" || faction === "greek") {
          uniqueFactions.add("greeks");
        } else uniqueFactions.add(faction);
      });
    }
  });

  console.log("Unique factions:", uniqueFactions);
  return uniqueFactions;
}

export function factionFormatter(item) {}
