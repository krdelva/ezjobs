import {createStore, applyMiddleware} from 'redux';
import combReducer from './reducers.js';
import {addUp} from './actions.js';
import reduxThunk from 'redux-thunk';

const middleware = applyMiddleware(reduxThunk)(createStore);
export const store = middleware(combReducer);

export const mapStateToProps = (state) => {
  return {
    count: state.counter,
    squares: state.squares,
    data: state.data,
    loading: state.loading
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(addUp())
    }
  };
};
