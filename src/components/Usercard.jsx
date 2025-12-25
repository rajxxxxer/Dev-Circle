import React from 'react'
import { dummyUserData } from '../assets/assets'

const Usercard = () => {
  const user=dummyUserData
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
    </div>
  )
}

export default Usercard