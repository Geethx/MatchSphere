import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import authReducer from "./features/authSlice";
import favouritesReducer from "./features/favouritesSlice";
import settingsReducer from "./features/settingsSlice";
import uiReducer from "./features/uiSlice";
import { sportsApi } from "../api/sportsApi";
import { authApi } from "../api/authApi";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["auth", "favourites", "settings"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  favourites: favouritesReducer,
  settings: settingsReducer,
  ui: uiReducer,
  [sportsApi.reducerPath]: sportsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sportsApi.middleware as any, authApi.middleware as any),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
