import { mouse, straightTo, Point } from '@nut-tree/nut-js';

const drawQuadrilateral = async (
  currentX: number,
  currentY: number,
  width: number,
  height: number,
) => {
  const newX = currentX + width;
  const newY = currentY + height;

  await mouse.move(straightTo(new Point(newX, currentY)));
  await mouse.move(straightTo(new Point(newX, newY)));
  await mouse.move(straightTo(new Point(currentX, newY)));
  await mouse.move(straightTo(new Point(currentX, currentY)));
};

export {
  drawQuadrilateral,
};
