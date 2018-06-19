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

//var reducer = combineReducers<CounterState, CounterActions>({
//    id: (state : number, action:CounterActions) => { return state; },
//    counter: (state = { currentValue: 0 }, action:CounterActions) => {
//      switch (action.type) {
//        case getType(counterActions.decreaseCounter):
//          return { currentValue: state.currentValue - 1};
//          case getType(counterActions.increaseCounter):
//            return { currentValue: state.currentValue + 1};
//            case getType(counterActions.resetCounter):
//              return { currentValue: 0 };
//        default:
//          return state;
//      }
//    },
//    isEnabled: (state = true, action:CounterActions) => {
//      switch (action.type) {
//        case getType(counterActions.setState):
//          return action.payload;
//        default:
//          return state;
//      }
//    },
//  });

export default (((st:any, ac:CounterActions) => {
  if (st === undefined){
    return {
      id: 0,
      counter: { currentValue: 0 },
      isEnabled: true
    }
  }
  var cst = st as CounterState;
  if(cst === null || st.id != ac.payload){
    return st;
  } else {
    switch(ac.type){
      case getType(counterActions.decreaseCounter):
        return { ...st, counter: { currentValue: st.counter.currentValue - 1} };
      case getType(counterActions.increaseCounter):
        return { ...st, counter: { currentValue: st.counter.currentValue + 1} };
      case getType(counterActions.resetCounter):
        return { ...st, counter: { currentValue: 0 } };
      default:
        return st;
    }
    //return reducer(st, ac);
  }
}) as Reducer<CounterState, CounterActions>)
//export default combineReducers<CounterState, CounterActions>({
//  counter: (state = { currentValue: 0 }, action) => {
//    switch (action.type) {
//      case getType(counterActions.decreaseCounter):
//        return { currentValue: state.currentValue - 1};
//        case getType(counterActions.increaseCounter):
//          return { currentValue: state.currentValue + 1};
//          case getType(counterActions.resetCounter):
//            return { currentValue: 0 };
//      default:
//        return state;
//    }
//  },
//  isEnabled: (state = true, action) => {
//    switch (action.type) {
//      case getType(counterActions.setState):
//        return action.payload;
//      default:
//        return state;
//    }
//  },
//});
