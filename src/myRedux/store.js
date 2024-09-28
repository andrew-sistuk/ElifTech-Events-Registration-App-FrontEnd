import { configureStore } from '@reduxjs/toolkit'; // import {
import eventsSlice from './events/slice';
import filtersSlice from './filters/slice';

export const appState = configureStore({
  reducer: {
    events: eventsSlice,
    filters: filtersSlice,
  },
});
