import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../users/userSlice'
import postsReducer from '../posts/postSlice'
import postsReveReducer from '../posts/postReveSlice'
export const store =configureStore({
    reducer:{
        users : userReducer,
        posts : postsReducer,
        postsReve : postsReveReducer,
    }
})