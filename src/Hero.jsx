import React from 'react'
import { useSelector } from 'react-redux'
import CreatePost from './posts/CreatePost';
import PostList from './posts/PostList';
import { allUsers } from './users/userSlice'
import { Routes, Route } from 'react-router-dom'
import SinglePost from './posts/SinglePost';
const Hero = () => {

  const users = useSelector(allUsers);
  console.log(users);
  return (
    <div className=' w-full bg-gray-600 text-white px-28 py-10 min-h-[100vh]'>
      <div className="flex justify-between ">
        <Routes>
          <Route path="posts">
            <Route index element={<PostList />} />
            <Route path=":postId" element={<SinglePost />} />
          </Route>

        </Routes>

      
        <CreatePost />

      </div>
    </div>
  )
}

export default Hero
