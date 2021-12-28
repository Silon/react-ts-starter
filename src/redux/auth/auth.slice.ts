import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TAuthState = {
  tokenAuth: string | null;
};

export const initialAuthState: TAuthState = {
  tokenAuth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setTokenAuth(state, action: PayloadAction<TAuthState['tokenAuth']>) {
      state.tokenAuth = action.payload;
    },
  },
});

// Actions
export const { setTokenAuth } = authSlice.actions;

// Reducer
export const authReducer = authSlice.reducer;
