import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { StateType } from 'typesafe-actions';

import { counterReducer } from '../features/counter';

const rootReducer = combineReducers({
  router: routerReducer,
  counter1: counterReducer,
  counter2: counterReducer,
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
