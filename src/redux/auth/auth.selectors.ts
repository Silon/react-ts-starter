import { RootState } from "../store";
import { TAuthState } from "./auth.slice";

export const selectTokenAuth = (state: RootState): TAuthState["tokenAuth"] =>
  state.auth.tokenAuth;

export const selectIsLoggedIn = (state: RootState) => !!state.auth.tokenAuth;
