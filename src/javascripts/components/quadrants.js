import data from '../data/data';

const appEmpty = () => {
  $('#eat').empty();
  $('#play').empty();
  $('#fight').empty();
  $('#sleep').empty();
};

const printToDom = () => {
  appEmpty();
  data.valueData.forEach((quadrant, i) => {
    const firstCaseUpper = quadrant.name.charAt(0).toUpperCase() + quadrant.name.slice(1);

    $(`#${quadrant.name}`).append(
      `<div id="${quadrant.name}-${i}Container" class="container ${quadrant.name}-container">
        <h2 id="${quadrant.name}-${i}Name" class="header ${quadrant.name}-header">${firstCaseUpper}</h2>
        <div id="${quadrant.name}-${i}Number" class="number-value">${quadrant.value}</div>
        <div id="${quadrant.name}-${i}ButtonContainer">
            <button type="button" id="${quadrant.name}-${i}Button1" class="button ${quadrant.name}-button">${quadrant.button1Name}</button>
            <button type="button" id="${quadrant.name}-${i}Button2" class="button ${quadrant.name}-button">${quadrant.button2Name}</button>
        </div>
    </div>`
    );
  });
};

export default { printToDom };
