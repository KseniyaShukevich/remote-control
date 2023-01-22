import { Region, Image } from '@nut-tree/nut-js';
import Jimp from 'jimp';

import { halfOfSize } from './screenSize';

const getRegion = async (x: number, y: number, width: number, height: number): Promise<Region> => {
  const left = x - halfOfSize;
  const top = y - halfOfSize;

  const region = new Region(
    left,
    top,
    width,
    height,
  );

  return region;
};

const getJimpImage = (image: Image) => {
  const jimpImage = new Jimp({
    data: image.data,
    width: image.width,
    height: image.height,
  });

  return jimpImage;
};

export {
  getRegion,
  getJimpImage,
};
