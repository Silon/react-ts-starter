import { AnyAction, Reducer, combineReducers } from 'redux';
import { TModalsState, modalsReducer } from 'src/redux/modals/modals.slice';
import { TAuthState, authReducer } from 'src/redux/auth/auth.slice';

import { BrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function withPersist<T>(key: string, reducer: Reducer<T, AnyAction>, config = {}) {
  return persistReducer({ ...config, key, storage }, reducer);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createRootReducer = (history: BrowserHistory) =>
  combineReducers({
    modals: withPersist<TModalsState>('modals', modalsReducer),
    auth: withPersist<TAuthState>('auth', authReducer),
    router: connectRouter(history),
  });
