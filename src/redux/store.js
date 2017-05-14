import {createStore, applyMiddleware} from 'redux';
import combReducer from './reducers.js';
import reduxThunk from 'redux-thunk';

const middleware = applyMiddleware(reduxThunk)(createStore);
export const store = middleware(combReducer);

export const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading,
    jobBool: state.jobBool,
    currJob: state.currJob
  };
};
