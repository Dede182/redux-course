import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../users/userSlice'
import postsReducer from '../posts/postSlice'
export const store =configureStore({
    reducer:{
        users : userReducer,
        posts : postsReducer
    }
})