import { mouse, straightTo, Point } from '@nut-tree/nut-js';

import { drawQuadrilateral } from './helpers';

const CIRCLE_DRAW_STEP = 0.05;

const drawCircle = async (args: Array<string>): Promise<string> => {
  const radius = Number(args[0]);
  const radians = Number((2 * Math.PI).toFixed(2));
  const { x: currentX, y: currentY } = await mouse.getPosition();

  const centerX = currentX + radius;
  const centerY = currentY;

  for (let i = 0; i < radians; i += CIRCLE_DRAW_STEP) {
    const newX = centerX - radius * Math.cos(i);
    const newY = centerY - radius * Math.sin(i);

    await mouse.move(straightTo(new Point(newX, newY)));
  }

  return `draw_circle:radius_${radius}px`;
};

const drawRectangle = async (args: Array<string>): Promise<string> => {
  const width = Number(args[0]);
  const height = Number(args[1]);
  const { x: currentX, y: currentY } = await mouse.getPosition();

  await drawQuadrilateral(currentX, currentY, width, height);

  return `draw_rectangle:width_${width}px,height_${height}`;
};

const drawSquare = async (args: Array<string>) => {
  const width = Number(args[0]);
  const { x: currentX, y: currentY } = await mouse.getPosition();

  await drawQuadrilateral(currentX, currentY, width, width);

  return `draw_square:width_${width}px`;
};

export {
  drawCircle,
  drawRectangle,
  drawSquare,
};
