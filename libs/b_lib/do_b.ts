import { doA } from '@libs/a_lib/do_a';

export function doB() {
  console.log('B has been done.');
}

export function doToB() {
  doA();
  doB();
}
