import data from '../data/data';

const buttonFunctions = () => {
  data.valueData.forEach((quadrant) => {
    const findId = data.valueData.indexOf(quadrant);
    const realValue = data.valueData[findId];

    $(`#${quadrant.name}Button1`).on('click', () => {
      if (realValue.value + realValue.button1 > 100) {
        realValue.value += (100 - realValue.value);
      } else {
        realValue.value += realValue.button1;
      }
      $(`#${quadrant.name}Number`).html(`${quadrant.value}`);
    });

    $(`#${quadrant.name}Button2`).on('click', () => {
      if (realValue.value + realValue.button2 > 100) {
        realValue.value += (100 - realValue.value);
      } else {
        realValue.value += realValue.button2;
      }
      $(`#${quadrant.name}Number`).html(`${quadrant.value}`);
    });
  });
};

export default { buttonFunctions };
