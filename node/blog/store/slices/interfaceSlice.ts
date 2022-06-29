/**
 * Redux Toolkit allows us to write "mutating" logic in reducers. It
 * doesn't actually mutate the state because it uses the Immer library,
 * which detects changes to a "draft state" and produces a brand new
 * immutable state based off those changes
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";

export interface InterfaceState {
	darkMode: boolean;
}

const initialState: InterfaceState = {
	darkMode: true
};

export const interfaceSlice = createSlice({
	name: "interface",
	initialState,
	reducers: {
		setIsDarkMode: (state, action: PayloadAction<boolean>) => {
			state.darkMode = action.payload;
		}
	}
});

/**
 * Selectors
 */
export const isDarkMode = (state: AppState) => state.interface.darkMode;

/**
 * Actions
 */
export const { setIsDarkMode } = interfaceSlice.actions;

/**
 * Reducer
 */
export default interfaceSlice.reducer;
