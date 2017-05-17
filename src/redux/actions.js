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

export const returnHome = () => {
  return {
    type: 'HOME'
  }
}

export const searchActive = () => {
  let status = store.getState().searchBool;
  if (status) {
    return {
      type: 'SEARCH_OFF'
    }
  } else {
    return {
      type: 'SEARCH_ON'
    }
  }
}
