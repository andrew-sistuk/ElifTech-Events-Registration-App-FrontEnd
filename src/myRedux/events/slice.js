import { createSlice } from '@reduxjs/toolkit';
import { fetchEvent, fetchEvents, registerMember } from './operations.js';
import { toast } from 'react-toastify';

const handlePending = state => {
  state.items = [];
  state.page = 1;
  state.totalPages = 0;
  state.hasNextPage = false;
  state.hasPreviousPage = false;
  state.loading = true;
  state.nameUser = null;
};

const handleRejected = (state, action) => {
  state.items = [];
  state.page = 1;
  state.totalPages = 0;
  state.hasNextPage = false;
  state.hasPreviousPage = false;
  state.loading = false;
  toast(`${action.payload}!`);
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
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEvents.pending, handlePending)
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
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
        state.nameUser = null;
        state.members = action.payload;
      })
      .addCase(fetchEvent.rejected, handleRejected)

      .addCase(registerMember.pending, handlePending)
      .addCase(registerMember.fulfilled, (state, action) => {
        state.loading = false;
        toast(`Thank you, ${action.payload.name}!`);
      })
      .addCase(registerMember.rejected, handleRejected);
  },
});

export const { changePage } = eventsSlice.actions;

export default eventsSlice.reducer;
