import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { allUsers } from '../users/userSlice';
import { createPost } from './postSlice';
import {ImSpinner2} from 'react-icons/im'
import { debounce } from "lodash"
const CreatePost = () => {
    const posts = useSelector((state)=>state.posts);
    const users = useSelector(allUsers);
    const dispatch = useDispatch()
    const [addRequestStatus,setAddRequestStatus] = useState('idle');
    const [newposts,setNewPosts] = useState({
        title : '',
        content : '',
        userId : 1,
    })

    const titleChanged = (e) => setNewPosts({...newposts,title:e.target.value});
    const contentChanged = (e) => setNewPosts({...newposts,content:e.target.value});
    const userIdChanged = (e) => setNewPosts({...newposts,userId:e.target.value});

    const disabled = [newposts.title,newposts.content].every(Boolean) && addRequestStatus === "idle" ;
        
    const addPost = () =>{
    
        if(disabled){
            try{

                dispatch(createPost({title :newposts.title,body:newposts.content,userId : newposts.userId}))
                setAddRequestStatus('pending')

            }
            catch(err){
                console.error('Failed to saved post',err);
            }finally{
                console.log(addRequestStatus)
                setAddRequestStatus('idle')
               
            }
       }


    }

    const dd = debounce(()=>{
        addPost();
    },400)
    const optionUser = users.map(user =>(
        <option key={user.id} value ={user.id} >{user.name}</option>
    ))

  return (
    <div className='flex flex-col space-y-4'>
            <div className="flex flex-col">
                <label htmlFor="Title">Title</label>
                <input id="Title" className='text-black' value={newposts.title} type="text" onChange={titleChanged}/>
            </div>
            <div className="flex flex-col text-black">
            <label htmlFor="author" className='text-white'>Author</label>
                <select value = {newposts.userId} id = "author" onChange={userIdChanged}>
                    {optionUser}
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="Title">Content</label>
                <textarea id="Title" className='text-black'
                 value={newposts.content} type="text" onChange={contentChanged}></textarea>
            </div>

            <button disabled={!disabled}
            onClick ={dd}
            className='w-full py-1 flex items-center justify-center bg-green-500 disabled:bg-green-300'>
                Add Post 
                {  addRequestStatus == "pending" ? <ImSpinner2 className="animate-spin text-white h-4 w-4 ml-1"  />: '' }
            </button>
    </div>
  )
}

export default CreatePost
