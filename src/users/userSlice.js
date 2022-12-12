import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
   
]

const UsersUrl = 'https://jsonplaceholder.typicode.com/users';

export const userFetch = createAsyncThunk('users/fetchUsers',async()=>{
    const response = await axios.get(UsersUrl);
    console.log(response);
    return response.data;
})

export const allUsers = (state) => state.users;
const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(userFetch.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;