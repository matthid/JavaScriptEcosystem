import * as React from "react";

import { counterModels, counterActions, counterSelectors } from '../';
import { CounterState, CounterActions } from "../reducer";

// Define a model for the current component
export interface CounterProps { name: string; val: number; isEnabled: boolean; submit: (action: ((id:number) => CounterActions)) => any; }

export const Counter = (props: CounterProps) =>
    <div>
        <h1>Counter {props.name} is {props.val}!</h1>
        <button disabled={!props.isEnabled} onClick={() => props.submit(id => counterActions.decreaseCounter(id))}>Decrease</button>
        <button disabled={!props.isEnabled} onClick={() => props.submit(id => counterActions.increaseCounter(id))}>Increase</button>
        <button onClick={() => props.submit(id => counterActions.resetCounter(id))}>Reset</button>
    </div>
    ;