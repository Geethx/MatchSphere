import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UIState } from "../../utils/types";

const initialState: UIState = {
  toast: null,
  isOnline: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showToast: (
      state,
      action: PayloadAction<{
        message: string;
        type: "success" | "error" | "info" | "warning";
      }>
    ) => {
      state.toast = {
        visible: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    hideToast: state => {
      state.toast = null;
    },
    setOnlineStatus: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

export const { showToast, hideToast, setOnlineStatus } = uiSlice.actions;

export default uiSlice.reducer;
