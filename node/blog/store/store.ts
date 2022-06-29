import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import interfaceReducer from "./slices/interfaceSlice";

/**
 * A friendly abstraction over the standard Redux createStore() function.
 * @returns A configured Redux store.
 */
export const createStore = () => {
	return configureStore({
		reducer: {
			interface: interfaceReducer
		},
		devTools: process.env.NODE_ENV !== "production"
	});
};

// Initialise Redux Store
const store = createStore();

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;
