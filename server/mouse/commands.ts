import MouseCommandName from './commandNameEnum';
import {
  moveMouseUp, moveMouseDown, moveMouseLeft, moveMouseRight, getMousePosition,
} from './handlers';

const MOUSE_COMMANDS = {
  [MouseCommandName.MOUSE_UP]: (args: Array<string>) => moveMouseUp(args),
  [MouseCommandName.MOUSE_DOWN]: (args: Array<string>) => moveMouseDown(args),
  [MouseCommandName.MOUSE_LEFT]: (args: Array<string>) => moveMouseLeft(args),
  [MouseCommandName.MOUSE_RIGHT]: (args: Array<string>) => moveMouseRight(args),
  [MouseCommandName.MOUSE_POSITION]: () => getMousePosition(),
};

export default MOUSE_COMMANDS;
