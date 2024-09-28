import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    filterMembers(state, action) {
      console.log(action.payload);
      state.name = action.payload;
    },
  },
});

export const { filterMembers } = filtersSlice.actions;

export default filtersSlice.reducer;
