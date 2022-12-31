import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search_bar: (state,{payload}) => {
      state.isOpen = payload
    },

  },
})

export const { search_bar } = searchSlice.actions

export default searchSlice.reducer