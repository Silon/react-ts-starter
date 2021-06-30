import { AnyAction, combineReducers } from 'redux';
import { TAuthState, authReducer } from 'src/redux/auth/auth.slice';

import { BrowserHistory } from 'history';
import { Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function withPersist<T>(key: string, reducer: Reducer<T, AnyAction>, config = {}) {
  return persistReducer({ ...config, key, storage }, reducer);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createRootReducer = (history: BrowserHistory) =>
  combineReducers({
    router: connectRouter(history),
    auth: withPersist<TAuthState>('auth', authReducer),
  });
