import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id :0,name:'htet'},
    {id : 1,name : 'sthue'}
]


export const allUsers = (state) => state.users;
const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{}
})

export default userSlice.reducer;