import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://fakerestapi.azurewebsites.net/api/v1/books'
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.todos = action.payload;
    },
  },
});

export default bookSlice.reducer;
