import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'

const Profilemodal = () => {
  const user=dummyUserData
  const[editForm,setEditForm]=useState({
    username:user.username,
    full_name:user.full_name,
    bio:user.bio,
    location:user.location,
    profile_picture:null,
    
  })
  const handlesave=()=>{
    e.preventDefault()
  }
  return (
    <div>
      <div>
        <div>
          <h1>
            Edit Profile
          </h1>
          <form action="" onSubmit={handlesave} className="flex flex-col gap-4">
         <div>
          <label htmlFor='profile_picture'>
      Profile Picture
      <input id="profile_picture" onChange={(e)=>setEditForm({...editForm,profile_picture:e.target.files[0]})} type="file" accept="image/*" />
      <div>
        <img src={editForm.profile_picture ? URL.createObjectURL(editForm.profile_picture) : user.profile_picture} alt="Profile" />
      </div>
          </label>
         </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profilemodal