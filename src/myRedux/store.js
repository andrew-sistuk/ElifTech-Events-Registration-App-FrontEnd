import { configureStore } from '@reduxjs/toolkit'; // import {
import eventsSlice from './events/slice';

export const appState = configureStore({
  reducer: {
    events: eventsSlice,
  },
});
