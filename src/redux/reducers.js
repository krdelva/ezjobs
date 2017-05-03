import {INCREMENT} from './types.js';

const combReducer = (state = {counter: 0}, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, counter: action.newCount};
    default:
      return state;
  }
};

export default combReducer;
