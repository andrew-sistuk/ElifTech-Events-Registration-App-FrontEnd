import { createSlice } from '@reduxjs/toolkit';
import { fetchEvent, fetchEvents } from './operations.js';

const handlePending = state => {
  state.item = [];
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.item = [];
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, handlePending)
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, handleRejected)

      .addCase(fetchEvent.pending, handlePending)
      .addCase(fetchEvent.fulfilled, (state, action) => {
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchEvent.rejected, handleRejected);
  },
});

export default eventsSlice.reducer;
