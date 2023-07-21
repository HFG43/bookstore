import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const response = await axios.get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W0sBnZyiKlnP4zodmy1O/books',
    );
    return response.data || [];
  } catch (error) {
    return 'There was an error, please try again';
  }
});

export const postBook = createAsyncThunk('book/postBook', async (newBook) => {
  try {
    await axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W0sBnZyiKlnP4zodmy1O/books',
      newBook,
    );
    return newBook;
  } catch (error) {
    return 'Post New Book Failed';
  }
});

export const removeBooks = createAsyncThunk(
  'book/removeBooks',
  async (bookId) => {
    try {
      await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W0sBnZyiKlnP4zodmy1O/books/${bookId}`,
      );
      return bookId;
    } catch (error) {
      return 'Remove Book Failed';
    }
  },
);

const initialState = {
  books: [],
  status: 'loading',
  error: null,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBook: (state, action) => {
    //   const addedBook = action.payload;
    //   state.books.books = [...state.books.books, addedBook];
    // },
    // removeBook: (state, action) => {
    //   const bookId = action.payload;
    //   state.books.books = state.books.books.filter(
    //     (book) => book.item_id !== bookId,
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        const addedBook = action.payload;
        const mappedBooks = Object.keys(addedBook).map((key) => ({
          item_id: key,
          title: addedBook[key][0].title,
          author: addedBook[key][0].author,
          category: addedBook[key][0].category,
        }));
        state.books = [...mappedBooks];
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(postBook.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        const postedBook = action.payload;
        state.books = [...state.books, postedBook];
      })
      .addCase(removeBooks.fulfilled, (state, action) => {
        const bookId = action.payload;
        state.books = state.books.filter((book) => book.item_id !== bookId);
      });
  },
});

export default bookSlice.reducer;
