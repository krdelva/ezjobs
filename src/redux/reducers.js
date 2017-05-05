import {INCREMENT} from './types.js';

const combReducer = (state = {counter: 0, squares: [{id:0}]}, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, counter: action.newCount, squares: [...state.squares, {id: action.newcount}]};
    default:
      return state;
  }
};

export default combReducer;
