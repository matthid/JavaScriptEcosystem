import * as React from "react";
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import store from '../../../store/store';
import { counterModels, counterActions, counterSelectors } from '../';
import { CounterState, CounterActions } from "../reducer";
import { CounterProps, Counter } from "./single-counter";
import { bindActionCreators } from "redux";

const mapStateToProps = (state: RootState, props: {name:string, id:number}) => {
    var counter = props.id == 1 ? state.counter1 : state.counter2;
    return ({
        val: counter.counter.currentValue,
        isEnabled: counter.isEnabled,
        name: props.name
    });
};

const mapDispatchToProps = (dispatch:any, props: {name:string, id:number}) => {
  return {
    submit: (act: (id:number) => any) => dispatch(act(props.id))
  }
}
//export default connect(mapStateToProps, {
//        submit: (act: (id:number) => any) => act(1)
//    })(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
