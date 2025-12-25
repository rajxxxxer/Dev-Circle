import React from 'react'
import { dummyUserData } from '../assets/assets'
import { MapPin, MessageCircle, Plus, UserPlus } from 'lucide-react'

const Usercard = ({user}) => {
  const curruser=dummyUserData
  const handlefollow= async ()=>{

  }
  const handleconnection= async ()=>{

  }
  return (
    <div key={user._id}>

      <div>
        <img src={user.profile_picture} alt={user.name}></img>
      <p>{user.full_name}</p>
      {user.username && <p>@{user.username}</p>}
      {user.bio && <p>{user.bio}</p>}
      
      </div>

      <div>
        <div>
          <MapPin className='w-4 h-4'>{user.location}</MapPin>
        </div>
        <div>
          <span>{user.followers.length}  followers</span>
        </div>
      </div>
      <div>
        <button onClick={handlefollow} disabled={curruser?.following.includes(user._id)}>
          <UserPlus>{curruser?.following.includes(user._id) ? "Following" : "Follow"  }</UserPlus>
        </button>

        <button onClick={handleconnection}>
          {
            curruser?.connections.includes(user._id) ? <MessageCircle className='w-4 h-4' /> : <Plus className='w-4 h-4' />
          }
        </button>
      </div>
    </div>
  )
}

export default Usercard