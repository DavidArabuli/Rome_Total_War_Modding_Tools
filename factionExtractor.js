export function factionExtractor(allUnitObjects) {
  const uniqueFactions = new Set();
  allUnitObjects.forEach((item) => {
    if (!item.isShip) {
      // Flatten the faction array to remove nested arrays
      const flatFactions = item.faction.flat();
      // Add unique factions to the set
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
