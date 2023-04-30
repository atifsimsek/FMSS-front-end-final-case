import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllTypes } from '../../types/ApiTypes';

interface DataState {
  filteredItems: AllTypes[];
}

const initialState: DataState = {
  filteredItems: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Filter items by search text
    filterBySearch: (
      state,
      action: PayloadAction<{ items: AllTypes[]; search: string }>
    ) => {
      const { items, search } = action.payload;
      const tempItems = items?.filter(
        (item) =>
          (item.name &&
            item.name.toLowerCase().includes(search.toLowerCase())) ||
          (item.model &&
            item.model.toLowerCase().includes(search.toLowerCase())) ||
          (item.title &&
            item.title.toLowerCase().includes(search.toLowerCase()))
      );

      state.filteredItems = tempItems || [];
    },
    // Filter items by hyperdrive rating
    filterByHyperdrive: (
      state,
      action: PayloadAction<{ items: AllTypes[]; filter: string }>
    ) => {
      const { items, filter } = action.payload;
      const filteredItems = items
        .filter((item: any) => {
          const value = Number.parseFloat(item.hyperdrive_rating);
          switch (filter) {
            case '0-2':
              return value >= 0.1 && value <= 2;
            case '3-4':
              return value >= 3 && value <= 4;
            case '5>':
              return value > 5;
            default:
              return value;
          }
        })
        .sort(
          (a: any, b: any) =>
            Number.parseFloat(a.hyperdrive_rating) -
            Number.parseFloat(b.hyperdrive_rating)
        );

      state.filteredItems = filteredItems;
    },
    // Sort items by maximum atmosphering speed
    sortBySpeed: (
      state,
      action: PayloadAction<{ items: AllTypes[]; filter: string }>
    ) => {
      const { items, filter } = action.payload;
      const tempItems = items
        .filter((item) => {
          const value = Number.parseFloat(item.max_atmosphering_speed);
          return !Number.isNaN(value);
        })
        .sort((a, b) => {
          const aRating = parseFloat(a.max_atmosphering_speed);
          const bRating = parseFloat(b.max_atmosphering_speed);
          if (!Number.isNaN(aRating) && !Number.isNaN(bRating)) {
            switch (filter) {
              case 'Slowest to Fastest':
                return aRating - bRating;
              case 'Fastest to Slowest':
                return bRating - aRating;
              default:
                return 0;
            }
          }
          return 0;
        });

      state.filteredItems = tempItems;
    },
    // Sort items alphabetically by name
    sortByAlphabetically: (
      state,
      action: PayloadAction<{ items: AllTypes[]; filter: string }>
    ) => {
      const { items, filter } = action.payload;

      const tempItems =
        items &&
        items.slice().sort((a, b) => {
          switch (filter) {
            case 'a-z':
              return a?.name.localeCompare(b?.name);
            case 'z-a':
              return b?.name.localeCompare(a?.name);
            default:
              return 0;
          }
        });
      state.filteredItems = tempItems || [];
    },
  },
});

export const {
  filterBySearch,
  filterByHyperdrive,
  sortBySpeed,
  sortByAlphabetically,
} = filterSlice.actions;

export default filterSlice.reducer;
