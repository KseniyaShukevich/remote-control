import DrawingCommandName from './commandNameEnum';
import { drawCircle, drawRectangle, drawSquare } from './handlers';

const DRAWING_COMMANDS = {
  [DrawingCommandName.DRAW_CIRCLE]: (args: Array<string>) => drawCircle(args),
  [DrawingCommandName.DRAW_RECTANGLE]: (args: Array<string>) => drawRectangle(args),
  [DrawingCommandName.DRAW_SQUARE]: (args: Array<string>) => drawSquare(args),
};

export default DRAWING_COMMANDS;
