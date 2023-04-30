import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../services/dataService';
import { useAppSelector } from '../hooks';
import { AllTypes } from '../../types/ApiTypes';

interface DataState {
  currentPage: number;
  favorites: AllTypes[];
  totalPages: number;
  items: AllTypes[];
  category: string;
  loadMore: string;
  isLoading: boolean;
  error: string;
}

const initialState: DataState = {
  currentPage: 1,
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    handleFavorite: (state, action) => {
      const data = action.payload;
      const index = state.favorites.findIndex(
        (item: any) => item.name === data.name
      );
      if (index === -1) {
        state.favorites.push(data);
      } else {
        state.favorites.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state) => {
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

export const { setCategory, setloadMore, handleFavorite, setCurrentPage } =
  dataSlice.actions;

export default dataSlice.reducer;

export const useData = () => useAppSelector((state) => state.data);
