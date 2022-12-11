import React from 'react'
import { useSelector } from 'react-redux'
import CreatePost from './posts/CreatePost';
import PostList from './posts/PostList';
import { allUsers } from './users/userSlice'
const Hero = () => {

    const users= useSelector(allUsers);
    console.log(users);
  return (
    <div className='h-[100vh] w-full bg-gray-600 text-white px-28 py-10'>
      <div className="flex justify-between ">
      <PostList/>
      <CreatePost/>

      </div>
    </div>
  )
}

export default Hero
