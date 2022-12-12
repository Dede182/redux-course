import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'


const initialState = {
    posts : [],
    status : 'idle',
    error : null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts',async()=>{
    const response = await axios.get(POSTS_URL);
    return response.data;
})


export const createPost = createAsyncThunk('posts/addNewPost',async(initialPost)=>{
    const response = await axios.post(POSTS_URL,initialPost)
    console.log(response)
    return response.data;
})

export const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{
        postAdded : {

            reducer : (state,action)=>{
                state.posts.push(action.payload)
             
            },
            prepare(title,content,userId){
                return {
                    payload:{
                        id : Date.now(),
                        title,content,userId,
                        date : new Date().toISOString(),
                        reactions : {
                            thumbsUp : 0,
                            wow : 0,
                            heart : 0,
                            rocket : 0,
                            coffee : 0
                        }
                    }
                }
            }
        },
        // post reaction

        reactionAdded(state,action){
            const {postId,reaction} = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        },


        // post Remove 
        postRemoved : {
            reducer: (state,action)=>{
               return  state.posts.filter(sta => sta.id !== parseInt(action.payload))
            
            },
            prepare(id){
                return { 
                    payload: id
                }
            }
        }
    },
    extraReducers(builder){
        builder
                .addCase(fetchPosts.pending,(state,action)=>{//first parameters accept type & sec return reducer
                    state.status = "loading";
                })
                .addCase(fetchPosts.fulfilled,(state,action)=>{
                    state.status = "successful";

                    let min =1;
                    const loadedPosts = action.payload.map(post=>{
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

                    state.posts = state.posts.concat(loadedPosts);
                })
                .addCase(fetchPosts.rejected,(state,action)=>{
                    state.status = "failed";
                    state.error = action.error.message;
                })
                .addCase(createPost.fulfilled,(state,action)=>{
                    action.payload.id = state.posts.length +1;
                    action.payload.date = new Date().toISOString();

                    action.payload.userId = Number(action.payload.userId)
                   action.payload.reactions ={
                    thumbsUp : 0,
                    wow : 0,
                    heart : 0,
                    rocket : 0,
                    coffee : 0
                }
                state.posts.push(action.payload)
                })
    }
})
export const postsAll = (state)=>state.posts.posts;
export const postsStatus = (state)=>state.posts.status;
export const postsError = (state)=>state.posts.error;

export const selectPostById = (state,postId)=>{

   const a= state.posts.posts.find(post => post.id === Number(postId));
   console.log(state);
   return a;
}

export const {postAdded,postRemoved,reactionAdded} = postSlice.actions;
export default postSlice.reducer