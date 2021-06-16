import { createSlice } from '@reduxjs/toolkit'

// 1. How do we wanna do the initialState. localStorage or like in Maks video?
// const initialState = localStorage

// 2. Created all the reducers based on the useStates in PostFormLogic.js

const form = createSlice({
  name: 'form',
  initialState: {
    details: [{ 
      id: 1,
      status: '',
      petname: '',
      species: '',
      breed: '',
      sex: '',
      description: '',
      location: '',
      email: '',
      errors: null
    }]
  },
  reducers: {
    setStatus: (store, action) => {
      store.status = action.payload
    },
    setPetname: (store, action) => {
      store.petname = action.payload
    },
    setSpecies: (store, action) => {
      store.species = action.payload
    },
    setBreed: (store, action) => {
      store.breed = action.payload
    },
    setSex: (store, action) => {
      store.sex = action.payload
    },
    setDescription: (store, action) => {
      store.description= action.payload
    },
    setLocation: (store, action) => {
      store.location = action.payload
    },
    setEmail: (store, action) => {
      store.email = action.payload
    },
    setErrors: (store, action) => {
      store.errors = action.payload
    }
  }

})

export default form