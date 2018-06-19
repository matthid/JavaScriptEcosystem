import * as React from "react";

import { RootState } from '../../../store';
import { counterModels, counterActions, counterSelectors } from '../';
import Counter from "./counter";


export default (props:{name:string; id:number}) => (
    <React.Fragment>
        <Counter name={props.name} id={props.id} />
    </React.Fragment>
    );
      