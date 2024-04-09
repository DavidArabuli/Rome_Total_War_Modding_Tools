export function inputCreator(unitObject) {
  const { attackPrimary, attackSecondary, defence, insideName } = unitObject;
  return `
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
        data-id="" />
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
    -------------------------`;
}

export function elementCreator(unitObject) {
  const name = document.createElement("h5");
  const factionList = document.createElement("h6");
  name.innerText = unitObject.renderName;
  factionList.innerText = unitObject.faction;
  const unitStatsDiv = document.createElement("div");
  unitStatsDiv.innerHTML = inputCreator(unitObject);

  unitStatsDiv.id = unitObject.insideName;
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
    easternDiv.appendChild(name);
    easternDiv.appendChild(factionList);
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
    romans.appendChild(name);
    romans.appendChild(factionList);
    romans.appendChild(unitStatsDiv);
    // unitStatsDiv.id = unitObject.insideName;
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
    barbarians.appendChild(name);
    barbarians.appendChild(factionList);
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
    greeks.appendChild(name);
    greeks.appendChild(factionList);
    greeks.appendChild(unitStatsDiv);
  }
  // southern
  else if (
    unitObject.faction.includes("egypt") ||
    unitObject.faction.includes("numidia") ||
    unitObject.faction.includes("carthage")
  ) {
    const southern = document.querySelector("#southern");
    southern.appendChild(name);
    southern.appendChild(factionList);
    southern.appendChild(unitStatsDiv);
  }
  // slaves
  else if (
    unitObject.faction[0] === "slave" ||
    unitObject.insideName.includes("merc")
  ) {
    const slaves = document.querySelector("#slaves");
    slaves.appendChild(name);
    slaves.appendChild(factionList);
    slaves.appendChild(unitStatsDiv);
  }
}
