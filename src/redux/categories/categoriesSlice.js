import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  status: 'Under Construction',
  reducers: {
    selectCategory: (state) => state.status,
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
