import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { CounterModel } from './models';
import * as counterActions from './actions';

export type CounterActions = ActionType<typeof counterActions>;
//type CounterActions = 
//  { type: "DCR"; } | { type: "INC";} | { type: "RST"; } | ...

export type CounterState = Readonly<{
  counter: CounterModel;
  isEnabled: boolean
}>;

export default combineReducers<CounterState, CounterActions>({
  counter: (state = { currentValue: 0 }, action) => {
    switch (action.type) {
      case getType(counterActions.decreaseCounter):
        return { currentValue: state.currentValue - 1};
        case getType(counterActions.increaseCounter):
          return { currentValue: state.currentValue + 1};
          case getType(counterActions.resetCounter):
            return { currentValue: 0 };
      default:
        return state;
    }
  },
  isEnabled: (state = true, action) => {
    switch (action.type) {
      case getType(counterActions.setState):
        return action.payload.isEnabled;
      default:
        return state;
    }
  },
});
