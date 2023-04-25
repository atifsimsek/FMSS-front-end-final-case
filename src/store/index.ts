import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice';

// Create store

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
