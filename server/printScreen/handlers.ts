import { mouse, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';

import { SCREEN_SIZE } from './screenSize';
import { getRegion, getJimpImage } from './helpers';

const printScreen = async (): Promise<string> => {
  const { x: centerScreenX, y: centerScreenY } = await mouse.getPosition();

  const region = await getRegion(centerScreenX, centerScreenY, SCREEN_SIZE, SCREEN_SIZE);
  const image = await screen.grabRegion(region);
  const imageRgb = await image.toRGB();

  const jimpImage = getJimpImage(imageRgb);
  const imageBuffer = await jimpImage.getBufferAsync(Jimp.MIME_PNG);
  const base64String = imageBuffer.toString('base64');

  return `prnt_scrn ${base64String}`;
};

export {
  printScreen,
};
