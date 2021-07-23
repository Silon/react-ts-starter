import { RootState } from 'src/redux/store';
import { TModalsState } from 'src/redux/modals/modals.slice';

export const selectActiveModals = (state: RootState): TModalsState['activeModals'] =>
  state.modals.activeModals;
