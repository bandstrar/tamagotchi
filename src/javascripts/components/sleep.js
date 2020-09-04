import data from '../data/data';

const printSleep = () => {
  $('#sleep').html(
    `<div id="sleepContainer" class="container sleep-container">
          <h2 id="sleepName" class="header sleep-header">Sleep</h2>
          <div id="energyNumber" class="number-value">${data.valueData[3].value}</div>
          <div id="sleepButtonContainer">
              <button type="button" id="napButton" class="button sleep-button">Take a Nap</button>
              <button type="button" id="napButton" class="button sleep-button">Deep Slumber</button>
          </div>
      </div>`
  );
};

export default { printSleep };
