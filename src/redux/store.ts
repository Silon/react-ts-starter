/* eslint-disable no-restricted-imports */

import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { ELsKey, ls } from 'src/utils/localStorage';

import { Dispatch } from 'react';
import { createBrowserHistory } from 'history';
import { createRootReducer } from './reducers';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import { throttle } from 'lodash';
import { useDispatch } from 'react-redux'; // This is the only place where this import is allowed.

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => [
    routerMiddleware(history),
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  ],
});

store.subscribe(
  throttle(() => {
    const state = store.getState();
    ls.set(ELsKey.TOKEN_AUTH, state.auth.tokenAuth);
  }, 1000),
);

export const persistor = persistStore(store);

export type TAppDispatch = Dispatch<AnyAction>;

export const useAppDispatch = (): TAppDispatch => useDispatch<typeof store.dispatch>();

export type RootState = ReturnType<typeof store.getState>;
