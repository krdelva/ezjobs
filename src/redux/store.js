import {createStore} from 'redux';
import combReducer from './reducers.js';
import {addUp} from './actions.js';

export const store = createStore(combReducer);

export const mapStateToProps = (state) => {
  return {
    count: state.counter
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(addUp())
    }
  };
};
