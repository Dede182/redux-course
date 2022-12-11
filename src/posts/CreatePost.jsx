import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { postAdded } from './postSlice'
import { allUsers } from '../users/userSlice';
const CreatePost = () => {
    const posts = useSelector((state)=>state.posts);
    const users = useSelector(allUsers);
    const dispatch = useDispatch()

    const [newposts,setNewPosts] = useState({
        title : '',
        content : '',
        userId : '',
    })

    const titleChanged = (e) => setNewPosts({...newposts,title:e.target.value});
    const contentChanged = (e) => setNewPosts({...newposts,content:e.target.value});
    const userIdChanged = (e) => setNewPosts({...newposts,userId:e.target.value});

    const addPost = () =>{
        if(newposts.title && newposts.content){
            dispatch(postAdded(newposts.title,newposts.content,newposts.userId))
        }
    }
    const optionUser = users.map(user =>(
        <option key={user.id} value ={user.id} >{user.name}</option>
    ))

    const disabled = Boolean(newposts.title) && Boolean(newposts.content) ;
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
            onClick ={addPost}
            className='w-full py-1 flex items-center justify-center bg-green-500 disabled:bg-green-400'>
                Add Post
            </button>
    </div>
  )
}

export default CreatePost
