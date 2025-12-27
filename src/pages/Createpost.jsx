import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'
import { Image, X } from 'lucide-react'
import toast from 'react-hot-toast'

const Createpost = () => {
  const [content,setContent]=useState() 
  const[images,setImages]=useState([])
  const[loading,setLoading]=useState(false)
  const user=dummyUserData
  const handlesubmit=async()=>{
  }

  return (
    <div>
    <div>
   <div>
    <h1>Create Post</h1>
    <h6>Share your thoughts and what are you building today</h6>
   </div>

   <div>

    <div>
      <img src={user.profile_picture} alt="avatar" />
      <div>
        <h2>{user.full_name}</h2>
        <p>@{user.username}</p>
      </div>
    </div>
    <textarea onChange={(e)=>setContent(e.target.value)} placeholder='whats happening'></textarea>

    {
    images.length>0 && (<div>

      {
        images.map((image,i)=>(<div>
          <img src={URL.createObjectURL(image)} alt="post image"></img>
          <div onClick={()=>setImages(images.filter((_,idx)=>idx!==i))}>
            <X></X>
            </div>
        </div>))
      }
      
    </div>)
    }
    <div>
      <label htmlFor='images' className='flex items-center' gap-2>
        <Image></Image>
      </label>
   <input type='file' id="images" accept='image/*' hidden multiple onChange={(e)=>setImages(...images,e.target.files)}></input>
   <button disabled={loading} onClick={()=>toast.promise(handlesubmit(),{
    loading:"publishing post",
    success:"post published",
    error:"error while publishing post"
   })}>
    publis post
   </button>
    </div>
   </div>

    
    
    
    </div>

    </div>
  )
}

export default Createpost