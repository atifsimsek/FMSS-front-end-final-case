import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../services/dataService';
import { useAppSelector } from '../hooks';
import { AllTypes, Item } from '../../types/ApiTypes';

interface DataState {
  totalPages: number;
  items: AllTypes[];
  category: string;
  loadMore: string;
  isLoading: boolean;
  error: string;
}

const initialState: DataState = {
  totalPages: 1,
  items: [],
  category: 'starships',
  loadMore: '',
  isLoading: false,
  error: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setloadMore: (state, action) => {
      state.loadMore = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      if (state.category === state.loadMore) {
        state.items = [...state.items, ...action.payload.results];
      } else {
        state.items = action.payload.results;
      }
      // Calculating the number of pages for each category
      state.totalPages = Math.ceil(action.payload.count / 10);
      state.isLoading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'An unexpected error occurred.';
    });
  },
});

export const { setCategory, setloadMore } = dataSlice.actions;

export default dataSlice.reducer;

export const useData = () => useAppSelector((state) => state.data);
