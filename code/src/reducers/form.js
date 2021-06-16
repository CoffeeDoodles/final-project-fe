import { createSlice } from '@reduxjs/toolkit'

const form = createSlice({
  name: 'form',
  initialState: {
    petposts: []
  },
  reducers: {
    setPetPosts: (store, action) => {
      store.petposts = action.payload
    },
    setAddSinglePost: (store, action) => {
      store.petposts = [...store.petposts, action.payload]
    },
  }
})

export default form