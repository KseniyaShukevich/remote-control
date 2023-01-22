import { Button, mouse } from '@nut-tree/nut-js';

const wrapFunction = async (
  callback: (args: Array<string>) => Promise<string>,
  args: Array<string>,
) => {
  await mouse.pressButton(Button.LEFT);

  const result = await callback(args);

  await mouse.releaseButton(Button.LEFT);

  return result;
};

export default wrapFunction;
