import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://eliftech-events-registration-app-backend-7vlv.onrender.com';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async (page, thunkAPI) => {
  try {
    const response = await axios.get(`/events?page=${page}`);
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchEvent = createAsyncThunk('events/fetchEvent', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/events/${id}/view`);
    console.log(response);
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
