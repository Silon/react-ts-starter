import { RootState } from 'src/redux/store';
import { TAuthState } from 'src/redux/auth/auth.slice';

export const selectTokenAuth = (state: RootState): TAuthState['tokenAuth'] => state.auth.tokenAuth;
