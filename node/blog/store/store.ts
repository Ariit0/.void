import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import thunk from "redux-thunk";

import interfaceReducer, { InterfaceState } from "./slices/interfaceSlice";
import storage from "./storage";

/**
 * Redux Full Store Structure
 */
type FullStoreStructure = ReturnType<typeof rootReducer>;

const rootPersistConfig: PersistConfig<FullStoreStructure> = {
	key: "root",
	storage
};

const interfacePersistConfig: PersistConfig<InterfaceState> = {
	key: "interface",
	storage
};

const rootReducer = combineReducers({
	interface: persistReducer(interfacePersistConfig, interfaceReducer)
});

/**
 * A friendly abstraction over the standard Redux createStore() function.
 * @returns A configured Redux store.
 */
export const createStore = () => {
	return configureStore({
		reducer: persistReducer(rootPersistConfig, rootReducer),
		devTools: process.env.NODE_ENV !== "production",
		middleware: [thunk]
	});
};

// Initialise Redux Store
const store = createStore();

export const persistor = persistStore(store);

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;
