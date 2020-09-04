import eat from './eat';
import play from './play';
import fight from './fight';
import sleep from './sleep';

const printToDom = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
  sleep.printSleep();
};

export default { printToDom };
