import { createSlice } from '@reduxjs/toolkit';
import { fetchEvent, fetchEvents } from './operations.js';

const handlePending = state => {
  state.items = [];
  state.page = 1;
  state.totalPages = 0;
  state.hasNextPage = false;
  state.hasPreviousPage = false;
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.items = [];
  state.page = 1;
  state.totalPages = 0;
  state.hasNextPage = false;
  state.hasPreviousPage = false;
  state.loading = false;
  state.error = action.payload;
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    members: [],
    page: 1,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, handlePending)
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.data;

        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
      })
      .addCase(fetchEvents.rejected, handleRejected)

      .addCase(fetchEvent.pending, handlePending)
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.members = action.payload;
      })
      .addCase(fetchEvent.rejected, handleRejected);
  },
});

export default eventsSlice.reducer;
