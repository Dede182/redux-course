import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
    {
        id : 0,
        title : "something",
        content : "min may nay kg lr",
        date : sub(new Date(),{minutes  :10}).toISOString(),
        reactions : {
            thumbsUp : 0,
            wow : 0,
            heart : 0,
            rocket : 0,
            coffee : 0
        }
    },
    {
        id : 1,
        title : "Jcole",
        content : "How many faking they stream",
        date : sub(new Date(),{minutes  :43}).toISOString(),
        reactions : {
            thumbsUp : 0,
            wow : 0,
            heart : 0,
            rocket : 0,
            coffee : 0
        }
    },
]


export const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{
        postAdded : {

            reducer : (state,action)=>{
                state.push(action.payload)
             
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
            const existingPost = state.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        },


        // post Remove 
        postRemoved : {
            reducer: (state,action)=>{
               return  state.filter(sta => sta.id !== parseInt(action.payload))
            
            },
            prepare(id){
                return { 
                    payload: id
                }
            }
        }
    }
})

export const {postAdded,postRemoved,reactionAdded} = postSlice.actions;
export default postSlice.reducer