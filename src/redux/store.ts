import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useMemo } from 'react';

import app from './app/reducer';

let store;

const initialState = {

};

const reducers = combineReducers({
    app,
});

function initStore(preloadedState = initialState) {
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware()),
    );
}

export type RootState = ReturnType<typeof store.getState>;

export const initializeStore = (preloadedState?: RootState): RootState => {
    const newStore = store ?? initStore(preloadedState);
  
    if (typeof window === 'undefined') return newStore;
    if (!store) store = newStore;
  
    return newStore;
};
  
export const useStore = (state: RootState): RootState => {
    const memoStore = useMemo(() => initializeStore(state), [state]);
    return memoStore;
};

