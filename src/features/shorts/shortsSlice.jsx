import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVideos } from '../../api/youtubeAPI';
import { parseISO8601Duration } from '../../utils/durationParser';

export const getTrendingShorts = createAsyncThunk(
  'shorts/fetchTrending',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchVideos();

      const shorts = data.filter((video) => {
        const duration = video.contentDetails?.duration;
        const totalSeconds = parseISO8601Duration(duration);
        return totalSeconds <= 60;
      });

      return shorts;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const shortsSlice = createSlice({
  name: 'shorts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingShorts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTrendingShorts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getTrendingShorts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default shortsSlice.reducer;
