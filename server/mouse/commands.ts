import MouseCommandName from './CommandNameEnum';
import {
  moveMouseUp, moveMouseDown, moveMouseLeft, moveMouseRight, getMousePosition,
} from './handlers';
import wrapFunction from '../common/functionWrapper';

const MOUSE_COMMANDS = {
  [MouseCommandName.MOUSE_UP]: (args: Array<string>) => wrapFunction(moveMouseUp, args),
  [MouseCommandName.MOUSE_DOWN]: (args: Array<string>) => wrapFunction(moveMouseDown, args),
  [MouseCommandName.MOUSE_LEFT]: (args: Array<string>) => wrapFunction(moveMouseLeft, args),
  [MouseCommandName.MOUSE_RIGHT]: (args: Array<string>) => wrapFunction(moveMouseRight, args),
  [MouseCommandName.MOUSE_POSITION]: () => getMousePosition(),
};

export default MOUSE_COMMANDS;
