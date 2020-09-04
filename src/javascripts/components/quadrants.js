import data from '../data/data';

const printToDom = () => {
  data.valueData.forEach((quadrant) => {
    const firstCaseUpper = quadrant.name.charAt(0).toUpperCase() + quadrant.name.slice(1);

    $(`#${quadrant.name}`).html(
      `<div id="${quadrant.name}Container" class="container ${quadrant.name}-container">
        <h2 id="${quadrant.name}Name" class="header ${quadrant.name}-header">${firstCaseUpper}</h2>
        <div id="${quadrant.name}Number" class="number-value">${quadrant.value}</div>
        <div id="${quadrant.name}ButtonContainer">
            <button type="button" id="${quadrant.name}Button1" class="button ${quadrant.name}-button">${quadrant.button1Name}</button>
            <button type="button" id="${quadrant.name}Button2" class="button ${quadrant.name}-button">${quadrant.button2Name}</button>
        </div>
    </div>`
    );
  });
};

export default { printToDom };
