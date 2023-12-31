import {configureStore} from '@reduxjs/toolkit';
import {StateSchema} from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: true,
        preloadedState: initialState,
    });
}
