import { combineReducers, Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { CounterModel } from './models';
import * as counterActions from './actions';

export type CounterActions = ActionType<typeof counterActions>;
//type CounterActions = 
//  { type: "DCR"; } | { type: "INC";} | { type: "RST"; } | ...

export type CounterState = Readonly<{
  id: number,
  counter: CounterModel;
  isEnabled: boolean
}>;

var defaultReducer = combineReducers<CounterState, CounterActions>({
    id: (state = 1, action:CounterActions) => state,
    counter: (state = { currentValue: 0 }, action:CounterActions) => {
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
    isEnabled: (state = true, action:CounterActions) => {
      switch (action.type) {
        case getType(counterActions.setState):
          return action.payload.isEnabled;
        default:
          return state;
      }
    },
  });

export default (id: number) => (((st:any, ac:CounterActions) => {
  if (st === undefined){
    return {
      id: id,
      counter: { currentValue: 0 },
      isEnabled: true
    }
  }
  var cst = st as CounterState;
  if(cst === null || cst.id != ac.payload.counterId){
    return st;
  } else {
    return defaultReducer(st, ac);
  }
}) as Reducer<CounterState, CounterActions>)

