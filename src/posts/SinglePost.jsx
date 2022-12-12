import { useSelector,useDispatch } from 'react-redux'
import { selectPostById } from './postSlice'

import ByAuthor from './ByAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SinglePost = () => {
    const {postId} = useParams();

    const post = useSelector(((state)=> selectPostById(state,postId)))
    
    if(!post){
        return (
            <section>
                <p>There is no post </p>
            </section>
        )
    }
    else{
        return (
            <div 
            id = {post.id}
             className="border-gray-400 border-2 px-6 pt-3 rounded-lg shadow-lg w-[500px] bg-gray-600 ">
                <p>{post.title}</p>
                <p>{post.body}</p>
                <div className="flex justify-between mb-2">
                <ByAuthor authorId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
                </div>
                <ReactionButton post={post}/>
                <div className="flex justify-between">
                    <div className=""></div>
                    
                <Link to ="/posts">Go back</Link>
                </div>
            </div>
          )
    }

}

export default SinglePost