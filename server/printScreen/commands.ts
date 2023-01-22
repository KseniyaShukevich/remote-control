import PrintScreenComandName from './CommandNameEnum';
import { printScreen } from './handlers';

const PRINT_SCREEN_COMANDS = {
  [PrintScreenComandName.PRINT_SCREEN]: printScreen,
};

export default PRINT_SCREEN_COMANDS;
