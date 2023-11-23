import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilter {
  label: string;
  name: string;
  active: boolean;
}

interface FiltersState {
  filters: IFilter[];
}

const initialState: FiltersState = {
  filters: [
    { label: 'Все', name: 'all', active: false },
    { label: 'Без пересадок', name: 'not', active: true },
    { label: '1 пересадка', name: 'one', active: false },
    { label: '2 пересадка', name: 'two', active: false },
    { label: '3 пересадка', name: 'three', active: false },
  ],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter(state, action: PayloadAction<string>) {
      const allActive = state.filters.every((item) => item.active);

      if (action.payload === 'all') {
        state.filters = state.filters.map((item) => ({ ...item, active: !allActive }));
      }

      const updatedFilters = state.filters.map((item) => (item.name === action.payload ? { ...item, active: !item.active } : item));

      const allFiltersChecked = updatedFilters.slice(1).every((item) => item.active);

      state.filters = updatedFilters.map((item) => (item.name === 'all' ? { ...item, active: allFiltersChecked } : item));
    },
  },
});

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
