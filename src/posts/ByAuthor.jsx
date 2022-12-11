import React from 'react'
import { useSelector } from 'react-redux'
import { allUsers } from '../users/userSlice'
const ByAuthor = ({authorId}) => {

    const users = useSelector(allUsers);

    const author = users.find(user => user.id == authorId)
  return (
    <span className='text-gray-200 text-xs '>
    by {author ? author.name : 'unKnown author'}
    </span>
  )
}

export default ByAuthor
