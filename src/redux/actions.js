import {store} from './store.js';

export const jobClick = (id) => {
  return {
    type: 'JOB_CLICK',
    id
  }
}

export const goBack = () => {
  console.log('calling action goback');
  return {
    type: 'GO_BACK'
  }
}
