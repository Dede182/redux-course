import { useSelector,useDispatch } from 'react-redux'
import { postRemoved } from './postSlice';
import { useEffect } from 'react';

import { postsAll,postsStatus,postsError,fetchPosts } from './postSlice';
import PostExcerpt from './postExcerpt';

const PostList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(postsAll);
    const postStatus = useSelector(postsStatus);
    const postError = useSelector(postsError);

    useEffect(()=>{
        if(postStatus === "idle"){
            dispatch(fetchPosts());
        }
    },[postStatus,dispatch])

    let content;
    if(postStatus ==="loading"){
        content = <p>Loading...</p>
    }
    else if(postStatus ==="successful"){
        const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
        content = orderedPosts.map((post)=><PostExcerpt post={post} key={post.id}/>)
    }
    else if (postStatus ==="failed"){
        content = <p>{error}</p>
    }

    const postDelete = (id)=>{
        dispatch(postRemoved(id))
    } 

  
  return (
    <div className='flex flex-col space-y-4 min-h-[100vh] w-full galo overflow-scroll scrollbar-hide'>
        {
         content
        }
    </div>
  )
}

export default PostList
