import {
  mouse, up, down, left, right,
} from '@nut-tree/nut-js';

const moveMouseUp = async (args: Array<string>): Promise<string> => {
  const [offset] = args;

  await mouse.move(up(Number(offset)));

  return `mouse_up:${offset}px`;
};

const moveMouseDown = async (args: Array<string>): Promise<string> => {
  const [offset] = args;

  await mouse.move(down(Number(offset)));

  return `mouse_down:${offset}px`;
};

const moveMouseLeft = async (args: Array<string>): Promise<string> => {
  const [offset] = args;

  await mouse.move(left(Number(offset)));

  return `mouse_left:${offset}px`;
};

const moveMouseRight = async (args: Array<string>): Promise<string> => {
  const [offset] = args;

  await mouse.move(right(Number(offset)));

  return `mouse_right:${offset}px`;
};

const getMousePosition = async (): Promise<string> => {
  const point = await mouse.getPosition();

  return `mouse_position:[${point.x},${point.y}]`;
};

export {
  moveMouseUp,
  moveMouseDown,
  moveMouseLeft,
  moveMouseRight,
  getMousePosition,
};
