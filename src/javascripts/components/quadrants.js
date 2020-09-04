import printEat from './eat';
import printFight from './fight';
import printPlay from './play';
import printSleep from './sleep';

const printToDom = () => {
  printEat();
  printPlay();
  printFight();
  printSleep();
};

export default { printToDom };
