import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const { data } = await axios.get(
      'https://fakerestapi.azurewebsites.net/api/v1/books'
    );

    return data;
  } catch (error) {
    return error?.response;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    booksList: [],
    currentPage: 1,
    postPerPage: 3,
    maxPageNumber: 10,
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.booksList = action.payload;
    },
  },
});

export default bookSlice.reducer;
