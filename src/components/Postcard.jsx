import React from 'react'
import { BadgeCheck } from'lucide-react'
import moment from 'moment'

const Postcard = ({post}) => {
  return (
    <div className='bg-white rounded-cl w-full p-4 space-y-4 max-w-2xl'>
      
    <img src={post.user.profile_picture} alt="" />
    <div>
      <div className='flex items-center space-x-1'>
        <span>
          {post.user.full_name}
          <BadgeCheck></BadgeCheck>
        </span>
      </div>
      <div>@{post.user.username}dot {moment(post.createdAt).fromNow()}</div>
    </div>
    <div> {post.content&& <p>{post.content}</p> }</div>

    <div>
      
    </div>

 
    </div>
  )
}

export default Postcard