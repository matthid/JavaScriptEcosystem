import * as React from 'react';


import Counter from '../features/counter/components/main';

import store from '../store/store';
import { RootState } from '../store';


export default () => (
  <React.Fragment>
    <h1>Welcome to counter example!</h1>
    <Counter id={1} name="Counter1" />
    <Counter id={2} name="Counter2" />
  </React.Fragment>
);
