import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TModalsState = {
  activeModals: string[];
};

export const initialModalsState: TModalsState = {
  activeModals: [],
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: initialModalsState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.activeModals = state.activeModals.includes(action.payload)
        ? state.activeModals
        : [...state.activeModals, action.payload];
    },
    closeModal(state, action: PayloadAction<string>) {
      state.activeModals = state.activeModals.filter((item) => item !== action.payload);
    },
    toggleModal(state, action: PayloadAction<string>) {
      state.activeModals = state.activeModals.includes(action.payload)
        ? state.activeModals.filter((item) => item !== action.payload)
        : [...state.activeModals, action.payload];
    },
  },
});

// Actions
export const { openModal, closeModal, toggleModal } = modalsSlice.actions;

// Reducer
export const modalsReducer = modalsSlice.reducer;
