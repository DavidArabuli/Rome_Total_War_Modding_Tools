export function createInitialUnitObject(unitBlock) {
  const unitObject = {
    insideName: "",
    renderName: "",
    faction: "",
    attackPrimary: 0,
    attackSecondary: 0,
    defence: 0,
    isShip: false,
  };
  // ==== identify naval units ====
  const isShipRegex = /category\s+ship/;
  unitBlock.forEach((line) => {
    const match = line.match(isShipRegex);
    if (match) {
      unitObject.isShip = true;
    }
  });

  // ==== unit rendered name ====

  const fullName = unitBlock[1].split(/\s{2,}/);
  const formattedName = fullName[2].replace(/;\s*/, "");
  unitObject.renderName = formattedName;

  // ==== unit inside name ====

  const insideName = unitBlock[1].split(/\s{2,}/);
  unitObject.insideName = insideName[1];

  // ==== faction name ====

  const factionName = unitBlock[unitBlock.length - 1].split(/\s{2,}/);

  unitObject.faction = factionName[1].split(",").map((item) => item);
  //  ==== unit primary attack ====

  const statPriAttackRegex = /stat_pri\s+(\d+)/;
  unitBlock.forEach((line) => {
    const match = line.match(statPriAttackRegex);
    if (match) {
      const attackPrimary = match[1];

      unitObject.attackPrimary = attackPrimary;
    }
  });
  //  ==== unit secondary attack ====

  const statSecAttackRegex = /stat_sec\s+(\d+)/;
  unitBlock.forEach((line) => {
    const match = line.match(statSecAttackRegex);
    if (match) {
      const attackSecondary = match[1];

      unitObject.attackSecondary = attackSecondary;
    }
  });

  // ==== unit defence ====

  const statPriArmourRegex = /stat_pri_armour\s+(\d+)/;
  unitBlock.forEach((line) => {
    const match = line.match(statPriArmourRegex);
    if (match) {
      const defence = match[1];

      unitObject.defence = defence;
    }
  });

  return unitObject;
}
