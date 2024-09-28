import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://eliftech-events-registration-app-backend-7vlv.onrender.com';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async ({ page, sortBy, sortOrder }, thunkAPI) => {
    try {
      // const sortBy = 'title';
      // const sortOrder = 'aes';

      // const url = page ? `/events?page=${page}` : '/events';
      const response = await axios.get('/events', {
        params: {
          page: page || 1,
          sortBy: sortBy || 'title',
          sortOrder: sortOrder || 'aes',
        },
      });

      // const response = await axios.get(url);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchEvent = createAsyncThunk('events/fetchEvent', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/events/${id}/view`);
    console.log(response);
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const registerMember = createAsyncThunk(
  'events/registerMember',
  async (userInfo, thunkAPI) => {
    try {
      const { eventId, newMember } = userInfo;

      const response = await axios.post(`/events/${eventId}/register`, { ...newMember });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
