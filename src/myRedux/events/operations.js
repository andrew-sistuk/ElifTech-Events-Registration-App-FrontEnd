import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://eliftech-events-registration-app-backend-7vlv.onrender.com';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/events');
    console.log(response.data);
    return response.data.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchEvent = createAsyncThunk('events/fetchEvent', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
