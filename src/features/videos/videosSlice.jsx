import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVideos, fetchSearchVideos } from '../../api/youtubeAPI';

export const searchVideos = createAsyncThunk(
  'videos/search',
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetchSearchVideos(query);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getVideos = createAsyncThunk(
  'videos/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchVideos();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const videosSlice = createSlice({
  name: 'videos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      })
      .addCase(searchVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(searchVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default videosSlice.reducer;
