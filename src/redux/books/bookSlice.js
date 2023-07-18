import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
//   id: 1,
//   category: '',
//   title: '',
//   author: '',
//   comments: '',
//   remove: '',
//   edit: '',
//   completed: false,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state) => {
      state.value += 1;
    },
    removeBook: (state) => {
      state.value -= 1;
    },
  },
});

console.log(bookSlice);

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
