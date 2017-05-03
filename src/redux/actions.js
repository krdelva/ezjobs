import {INCREMENT} from './types.js';
import {store} from './store.js';

export const addUp = () => {
  let cur = store.getState().counter;
  console.log('called action');
  return {
    type: INCREMENT,
    newCount: cur + 1
  }
}
