import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  message: 'Under Construction',
  reducers: {
    selectCategory: (state) => state.message,
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
