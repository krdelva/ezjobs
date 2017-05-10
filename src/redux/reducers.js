//import {INCREMENT} from './types.js';

const combReducer = (state = {counter: 0, squares: [{id:0}]}, action) => {
  switch (action.type) {
    case 'LOADER':
      console.log(action.loading);
      return {...state, loading: action.loading};
    case 'FETCH_JOBS':
      console.log(action.data);
      return {...state, data: action.data, loading: action.loading};
    default:
      return state;
  }
};

export default combReducer;
