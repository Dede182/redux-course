import { reactionAdded } from "./postSlice"
import { useDispatch } from "react-redux"

const reactionEmojis = {
    thumbsUp : '👍',
    wow : '😲',
    heart : '🧡',
    rocket : '🚀',
    coffee : '☕'
}


const ReactionButton = ({post}) => {

    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmojis).map(([name,emoji])=>{
        return (
            <button key={name} className="reactionButtons ml-2"
             onClick={()=>dispatch(reactionAdded({postId : post.id,reaction : name}))}>
                {emoji}{post.reactions[name]}
            </button>
            
        )
    })
    
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButton