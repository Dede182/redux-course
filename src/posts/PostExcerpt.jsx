import ByAuthor from './ByAuthor';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';
import { Link } from 'react-router-dom';

const PostExcerpt = ({post}) => {
  return (
    <div 
    id = {post.id}
     className="border-gray-400 border-2 px-6 py-3 rounded-lg shadow-lg w-[500px] bg-gray-600">
        <p>{post.title}</p>
        <p>{post.body}</p>
        <div className="flex justify-between mb-2">
        <ByAuthor authorId={post.userId}/>
        <TimeAgo timestamp={post.date}/>
        <Link to={`${post.id}`}>View Post</Link>
        </div>
        <ReactionButton post={post}/>
    </div>
  )
}

export default PostExcerpt