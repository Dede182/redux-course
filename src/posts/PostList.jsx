import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { postRemoved } from './postSlice';
import ByAuthor from './ByAuthor';
import postSlice from './postSlice'
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';


const PostList = () => {
    const dispatch = useDispatch();

    const posts = useSelector((state)=>state.posts);

    const postDelete = (id)=>{
        dispatch(postRemoved(id))
    } 
  return (
    <div className='flex flex-col space-y-4'>
        {
            posts.map(post => (
                <div key={post.id}
                id = {post.id}
                 className="border-gray-400 border-2 px-6 py-3 rounded-lg shadow-lg">
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                    <div className="flex justify-between mb-2">
                    <ByAuthor authorId={post.userId}/>
                    <TimeAgo timestamp={post.date}/>
                    </div>
                    <ReactionButton post={post}/>
                </div>
            ))
        }
    </div>
  )
}

export default PostList
