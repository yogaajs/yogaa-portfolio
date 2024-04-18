//  Librairies
// ===========================================================

import { create } from 'zustand';


// Types
// ===========================================================

interface PopupStoreState {
  info: boolean;
  setPopup: (_name: string, bool: boolean) => void;
}


// Store
// ===========================================================

export const usePopupStore = create<PopupStoreState>((set) => ({

  // Popups
  info: false,

  // Functions
  setPopup: (_name, _bool) => set({ [_name]: _bool }),
}));
