// eslint-disable-next-line no-restricted-imports
import { get, set } from 'local-storage'; // This is the only place where this import is allowed.

import { TAuthState } from 'src/redux/auth/auth.slice';

export enum ELsKey {
  COMMUNITY_NAME = 'COMMUNITY_NAME',
  COMMUNITY_PUBLIC = 'COMMUNITY_PUBLIC',
  TOKEN_AUTH = 'TOKEN_AUTH',
}

// prettier-ignore
type TData<T> = 
  T extends ELsKey.COMMUNITY_NAME ? string :
  T extends ELsKey.COMMUNITY_PUBLIC ? boolean :
  T extends ELsKey.TOKEN_AUTH ? TAuthState['tokenAuth'] :
  null;

export const ls = {
  set<T extends ELsKey>(key: T, value: TData<T>): void {
    set(key, value);
  },
  get<T extends ELsKey>(key: T): TData<T> | null {
    return get(key);
  },
};
