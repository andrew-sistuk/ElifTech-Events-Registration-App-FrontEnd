import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '', sortBy: 'title', sortOrder: 'aes' },
  reducers: {
    filterMembers(state, action) {
      state.name = action.payload;
    },
    changeSortBy(state, action) {
      state.sortBy = action.payload;
    },
    changeSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
  },
});

export const { filterMembers, changeSortBy, changeSortOrder } = filtersSlice.actions;

export default filtersSlice.reducer;
