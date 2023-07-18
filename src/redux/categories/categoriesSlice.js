import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectCategory: (state) => {
      state.value += 1;
    },
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
