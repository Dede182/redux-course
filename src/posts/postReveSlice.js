import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    status : 'idle',
    posts : [],
    error : null,
}

const baseUrl = "https://jsonplaceholder.typicode.com/posts";
export const FetchPosts =  createAsyncThunk('/posts/fetchPosts',async(initilaPost)=>{
    const response = await axios.get(baseUrl);
    return response.data;
})


export const postsAll = (state)=>state.posts.posts;
export const postsStatus = (state)=>state.posts.status;
export const postsError = (state)=>state.posts.error;

export const postReveSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder 
            .addCase(FetchPosts.pending,(state,action)=>{
                state.status ="pending"
            })
            .addCase(FetchPosts.fulfilled,(state,action)=>{
                state.status = "successful"
                let min = 1;
                const loadedposts = action.payload.map(post => {
                    post.date = sub(new Date(),{minutes:min++}).toISOString();
                    post.reactions = {
                        thumbsUp : 0,
                        wow : 0,
                        heart : 0,
                        rocket : 0,
                        coffee : 0
                    }

                    return post; 
                })

               state.posts =  state.posts.concat(loadedposts);
            })
            .addCase(FetchPosts.rejected,(state,action)=>{
                state.status = "failed",
                state.error = action.error.message
            })
    }
    
})


export default postReveSlice.reducer;