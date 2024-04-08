export function inputCreator(unitObject) {
  const { attackPrimary, attackSecondary, defence, insideName } = unitObject;
  return `<form >
      <label for="${attackPrimary}">Primary attack</label>
      <input 
        value="${attackPrimary}" 
        type="number" 
        name="${attackPrimary}" 
        min="1" 
        max="60" />
      <label for="${attackSecondary}">Secondary attack</label>
      <input 
        type="number" 
        name="${attackSecondary}" 
        value="${attackSecondary}" 
        min="1" 
        max="60" />
      <label for="${defence}">Defence</label>
      <input
        value="${defence}"
        type="number"
        name="${defence}"
        min="1"
        max="60"
      />
    </form>`;
}

export function elementCreator(unitObject, uniqueFactionsSet) {
  const name = document.createElement("h5");
  name.innerText = unitObject.renderName;

  for (let i = 0; i < unitObject.faction.length; i++) {
    const unitFaction = unitObject.faction[i];

    if (uniqueFactionsSet.has(unitFaction)) {
      const clonedName = name.cloneNode(true);

      const factionDiv = document.querySelector(`.${unitFaction}`);
      factionDiv.appendChild(clonedName);
      const elementForm = document.createElement("form");
      elementForm.innerHTML = inputCreator(unitObject);
      elementForm.name = unitObject.insideName;
      factionDiv.appendChild(elementForm);
    }
  }
}
