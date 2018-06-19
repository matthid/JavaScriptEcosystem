import * as cuid from 'cuid';
import { createStandardAction, createAction } from 'typesafe-actions';

import { CounterModel } from './models';

export const increaseCounter = createAction("INC", resolve => {
  return (counterId:number) => resolve(counterId);
});

export const resetCounter = createAction("RST", resolve => {
  return (counterId:number) => resolve(counterId);
});

export const decreaseCounter = createAction("DCR", resolve => {
  return (counterId:number) => resolve(counterId);
});

export const setState = createAction("SETSTATE", resolve => {
  return (counterId:number, isEnabled: boolean) => resolve(counterId, isEnabled);
  return (id:number) => resolve({ counterId: id });
});

export const resetCounter = createAction("RST", resolve => {
  return (id:number) => resolve({ counterId: id });
});

export const decreaseCounter = createAction("DCR", resolve => {
  return (id:number) => resolve({ counterId: id });
});

export const setState = createAction("SETSTATE", resolve => {
  return (id:number, isEnabled: boolean) => resolve({ counterId: id, isEnabled });
});
//export const increaseCounter: () => {
//  type: "INC";
//}