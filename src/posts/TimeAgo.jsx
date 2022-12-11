import React from 'react'
import { parseISO,formatDistanceToNow } from 'date-fns'
const TimeAgo = ({timestamp}) => {

    let timeAgo = "";
    if(timestamp){
        const date  = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date);
        timeAgo += `${timePeriod} ago`;
    }
  return (
    <span title={timestamp} className='text-gray-200 text-xs '>
    &nbsp; <i>{timeAgo}</i>
</span>
  )
}

export default TimeAgo