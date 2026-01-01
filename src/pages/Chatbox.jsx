import React, { useEffect, useRef, useState } from 'react'
import { dummyMessagesData, dummyUserData } from '../assets/assets'
import { ImageIcon, SendHorizonal } from 'lucide-react'

const Chatbox = () => {
  const messages=dummyMessagesData
  const [text,setText]=useState("")
  const [images,setImages]=useState(null)
  const[user,setUser]=useState(dummyUserData)
  const messagesref=useRef(null)
  const sendmessage=async()=>{
  }
  useEffect(()=>{
    messagesref.current?.scrollIntoView({behavior:"smooth"})
  })
  return user && (
    <div>
      <div>
        <img src={user.profile_picture}></img>
        <div>
          <p>{user.full_name}</p>
          <p>{user.username}</p>
        </div>
      </div>
      <div>
        <div>
          {messages.toSorted((a,b)=>new Date(a.createdAt)-new Date(b.createdAt)).map((message,index)=>(<div key={index} className={`flex flex-col ${message.to_user_id!==user._id?'items-start':'items-end'}`} ><div>
            {message.message_type==="image"&&<img src={message.media_url}></img>}
           
            <p>{message.text}</p>
            </div></div>))}
            <div ref={messagesref}></div>  
        </div>
      </div>
      <div>
        <div>
          <input onKeyDown={e=>e.key==='Enter' && sendmessage()} type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
          <label htmlFor='image'>
            {
              images?<img src={URL.createObjectURL(images)}></img>:<ImageIcon></ImageIcon>
            }
            <input type="file" id="image" accept="image/*" style={{display:"none"}} onChange={(e)=>setImages(e.target.files[0])}></input>
          </label>
          <button onClick={sendmessage()}>
            <SendHorizonal size={18}>

            </SendHorizonal>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbox