import data from '../data/data';

const printEat = () => {
  $('#eat').html(
    `<div id="eatContainer" class="container eat-container">
          <h2 id="eatName" class="header eat-header">Eat</h2>
          <div id="fullNumber" class="number-value full-value">${data.valueData[0].value}</div>
          <div id="eatButtonContainer">
              <button type="button" id="healthyButton" class="button eat-button">Healthy Food</button>
              <button type="button" id="junkButton" class="button eat-button">Junk Food</button>
          </div>
      </div>`
  );
};

export default { printEat };
