import * as React from "react";
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { counterModels, counterActions, counterSelectors } from '../';
import { CounterActions } from "../reducer";

// Define a model for the current component
interface CounterProps { name: string; val: number; isEnabled: boolean; submit: (action: CounterActions) => any; }

const Counter = (props: CounterProps) =>
    <div>
        <h1>Counter {props.name} is {props.val}!</h1>
        <button disabled={!props.isEnabled} onClick={() => props.submit(counterActions.decreaseCounter(0))}>Decrease</button>
        <button disabled={!props.isEnabled} onClick={() => props.submit(counterActions.increaseCounter(0))}>Increase</button>
        <button onClick={() => props.submit(counterActions.resetCounter(0))}>Reset</button>
    </div>
    ;

const mapStateToProps = (state: RootState, props: {name:string}) => ({
    val: state.counter.counter.currentValue,
    isEnabled: state.counter.isEnabled,
    name: props.name
});

export default connect(mapStateToProps, {
    submit: (act: CounterActions) => act
})(Counter);
