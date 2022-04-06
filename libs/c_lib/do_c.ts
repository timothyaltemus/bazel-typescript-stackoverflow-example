import { doA } from '@libs/a_lib/do_a';
import { doToB } from '@libs/b_lib/do_b';

export function doC() {
  console.log('C has been done.');
}

export function doToC(skip: boolean = false) {
  if (skip) {
    doA();
    doC();
    return;
  }
  doToB();
  doC();
}
