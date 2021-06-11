import { createSlice } from '@reduxjs/toolkit'

const user = createSlice ({
    name: 'user', 
    initialState: {
        username: null,
        accessToken: null,
        errors: null,
        homePage: null
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload
        },
        setErrors: (store, action) => {
            store.errors = action.payload
        },
        setHomePage: (store, action) => {
            store.homePage = action.payload
        }
    }
})

export default user

