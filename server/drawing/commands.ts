import DrawingCommandName from './CommandNameEnum';
import { drawCircle, drawRectangle, drawSquare } from './handlers';
import wrapFunction from '../common/functionWrapper';

const DRAWING_COMMANDS = {
  [DrawingCommandName.DRAW_CIRCLE]: (args: Array<string>) => wrapFunction(drawCircle, args),
  [DrawingCommandName.DRAW_RECTANGLE]: (args: Array<string>) => wrapFunction(drawRectangle, args),
  [DrawingCommandName.DRAW_SQUARE]: (args: Array<string>) => wrapFunction(drawSquare, args),
};

export default DRAWING_COMMANDS;
