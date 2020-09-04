import data from '../data/data';

const buttonFunctions = () => {
  data.valueData.forEach((quadrant) => {
    const findId = data.valueData.indexOf(quadrant);

    $(`#${quadrant.name}Button1`).on('click', () => {
      data.valueData[findId].value += data.valueData[findId].button1;
      $(`#${quadrant.name}Number`).html(`${quadrant.value}`);
    });

    $(`#${quadrant.name}Button2`).on('click', () => {
      data.valueData[findId].value += data.valueData[findId].button2;
      $(`#${quadrant.name}Number`).html(`${quadrant.value}`);
    });
  });
};

export default { buttonFunctions };
