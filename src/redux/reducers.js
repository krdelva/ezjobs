const combReducer = (state = {jobBool: false}, action) => {
  switch (action.type) {
    case 'LOADER':
      console.log(action.loading);
      return {...state, loading: action.loading};
    case 'FETCH_JOBS':
      console.log(action.data);
      return {...state, data: action.data, loading: action.loading};
    case 'JOB_CLICK':
      return {...state, jobBool: true, currJob: action.id};
    case 'GO_BACK':
      return {...state, jobBool: false};
    case 'HOME':
      return {...state, jobBool: false, data: false};
    default:
      return state;
  }
};

export default combReducer;
