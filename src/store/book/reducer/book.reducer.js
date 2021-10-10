import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const { data } = await axios.get(
      'https://fakerestapi.azurewebsites.net/api/v1/books'
    );

    return data;
  } catch (error) {
    return error;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    booksList: [],
    currentPage: 1,
    postPerPage: 3,
    maxPageNumber: 10,
    loading: true,
    error: false,
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
      state.error = false;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.loading = 'false';
      state.booksList = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.status = 'rejected';
      state.error = 'true';
    },
  },
});

export default bookSlice.reducer;
