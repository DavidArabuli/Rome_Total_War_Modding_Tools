// dynamically generates HTML elements with values from unit object, and organizes it by in-game regions\cultures. Can be expanded by adding extra HTML with new unit parameters.

// we are also disabling secondary attack input for some units, since game will crash, if unit which has no missile weapon gets non-zero secondary attack. Do not remove that condition!

export function inputCreator(unitObject) {
  const { attackPrimary, attackSecondary, defence, insideName, renderName } =
    unitObject;
  const secondaryDisabled = attackSecondary == 0 ? "disabled" : "";
  return `
  <h4 class="unit-name">${renderName}</h4>
      <p>Primary attack</p>
      <input
        value="${attackPrimary}"
        type="number"
        name="attackPrimary"
        min="0"
        max="63"
        data-id="" />
      <p>Secondary attack</p>
      <input
        type="number"
        name="attackSecondary"
        value="${attackSecondary}"
        min="0"
        max="63"
        data-id=""
        ${secondaryDisabled} />
      <p>Defence</p>
      <input
        value="${defence}"
        type="number"
        name="defence"
        min="0"
        max="63"
        data-id=""
        
      />
    
    <br>
    <br>
    ---------------------------------------------`;
}

export function elementCreator(unitObject) {
  const name = document.createElement("h4");
  const factionList = document.createElement("p");
  factionList.classList.add("faction-list");
  name.innerText = unitObject.renderName;

  factionList.innerText = `factions: ${unitObject.faction}`;
  const unitStatsDiv = document.createElement("div");
  unitStatsDiv.innerHTML = inputCreator(unitObject);
  unitStatsDiv.classList.add("unit-card");

  // unit type ends up being more unique, than render and inside name, so we are using it instead now.

  unitStatsDiv.id = unitObject.type;
  const inputs = unitStatsDiv.querySelectorAll("input");
  inputs.forEach((input) => {
    input.setAttribute("data-id", unitStatsDiv.id);
  });

  // eastern
  if (
    unitObject.faction.includes("armenia") ||
    unitObject.faction.includes("pontus") ||
    unitObject.faction.includes("eastern") ||
    unitObject.faction.includes("parthia")
  ) {
    const easternDiv = document.querySelector("#eastern");
    // easternDiv.appendChild(name);
    unitStatsDiv.appendChild(factionList);
    easternDiv.appendChild(unitStatsDiv);
  }
  // romans
  else if (
    unitObject.faction.includes("romans_julii") ||
    unitObject.faction.includes("romans_brutii") ||
    unitObject.faction.includes("romans_scipii") ||
    unitObject.faction.includes("romans_senate") ||
    unitObject.faction.includes("roman")
  ) {
    const romans = document.querySelector("#romans");
    // romans.appendChild(name);
    unitStatsDiv.appendChild(factionList);
    romans.appendChild(unitStatsDiv);
  }
  // barbarians
  else if (
    unitObject.faction.includes("scythia") ||
    unitObject.faction.includes("gauls") ||
    unitObject.faction.includes("britons") ||
    unitObject.faction.includes("dacia") ||
    unitObject.faction.includes("germans") ||
    unitObject.faction.includes("thrace") ||
    unitObject.faction.includes("spain")
  ) {
    const barbarians = document.querySelector("#barbarians");
    // barbarians.appendChild(name);
    unitStatsDiv.appendChild(factionList);
    barbarians.appendChild(unitStatsDiv);
  }
  // greeks
  else if (
    unitObject.faction.includes("greek") ||
    unitObject.faction.includes("greek_cities") ||
    unitObject.faction.includes("seleucid") ||
    unitObject.faction.includes("macedon")
  ) {
    const greeks = document.querySelector("#greeks");
    // greeks.appendChild(name);
    unitStatsDiv.appendChild(factionList);
    greeks.appendChild(unitStatsDiv);
  }
  // southern
  else if (
    unitObject.faction.includes("egypt") ||
    unitObject.faction.includes("numidia") ||
    unitObject.faction.includes("carthage")
  ) {
    const southern = document.querySelector("#southern");
    // southern.appendChild(name);
    unitStatsDiv.appendChild(factionList);
    southern.appendChild(unitStatsDiv);
  }
  // slaves and mercenaries
  else if (
    unitObject.faction[0] === "slave" ||
    unitObject.insideName.includes("merc")
  ) {
    const slaves = document.querySelector("#slaves");
    // slaves.appendChild(name);
    unitStatsDiv.appendChild(factionList);
    slaves.appendChild(unitStatsDiv);
  }
}
