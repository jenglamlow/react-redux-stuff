import { combineReducers } from 'redux';

import testReducer from './testReducer';

const appReducer = combineReducers({
  test: testReducer,
});
  
const rootReducer = (state, action) => {
  // if (action.type === 'RESET_STORE') {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;