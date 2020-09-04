const printFight = () => {
  $('#fight').html(
    `<div id="fightContainer" class="container fight-container">
          <h2 id="fightName" class="header fight-header">Fight</h2>
          <div id="strengthNumber" class="number-value strength-value"></div>
          <div id="fightButtonContainer">
              <button type="button" id="runButton" class="button fight-button">Run Away!</button>
              <button type="button" id="brawlButton" class="button fight-button">Brawl!</button>
          </div>
      </div>`
  );
};

export default { printFight };
