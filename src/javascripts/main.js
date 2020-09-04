import quadrants from './components/quadrants';
import buttons from './components/buttons';

import '../styles/main.scss';

const init = () => {
  quadrants.printToDom();
  buttons.buttonFunctions();
};

init();
