import data from '../data/data';
import quadrants from './quadrants';

const buttonFunctions = () => {
  data.valueData.forEach((quadrant, i) => {
    const findId = data.valueData.indexOf(quadrant);

    $(`#${quadrant.name}-${i}Button1`).on('click', () => {
      data.valueData[findId].value += data.valueData[findId].button1;
      quadrants.printToDom();
    });

    $(`#${quadrant.name}-${i}Button2`).on('click', () => {
      data.valueData[findId].value += data.valueData[findId].button2;
      quadrants.printToDom();
    });
  });
};

export default { buttonFunctions };
