import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice';
import dataReducer from './features/dataSlice';
import filterReducer from './features/filterSlice';

// Create store

const rootReducer = combineReducers({
  theme: themeReducer,
  data: dataReducer,
  filterData: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
