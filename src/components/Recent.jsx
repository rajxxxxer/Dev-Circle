import React, { useEffect, useState } from 'react'
import { dummyRecentMessagesData } from '../assets/assets';
import { Link } from 'lucide-react';
import moment from 'moment';

const Recent = () => {
  const[msg,setMsg]=useState([]);
  const fetchmsg=async()=>{
    setMsg(dummyRecentMessagesData)
  }
  useEffect(()=>{
    fetchmsg();
  }, [])
  return (
    <div className='bg-white'>
<h3>Recent Messages</h3>
<div className='flex flex-col overflow-y-scroll no-scrollbar'>
{
  msg.map((m,idx)=>(
    <Link to={`/messages/${m.from_user_id.id}`}   key={idx}>
      <img src={m.from_user_id.profile_picture} alt="profile" className='w-10 h-10 rounded-full object-cover border'/>
      <div>
       <div> 
        <p>{m.from_user_id.full_name}</p>
        <p>{moment(m.createdAt).fromNow()}</p>
        </div>
        <div className='flex justify-between'>
          <p>{m.text?m.text:'Media'}</p>
          {!m.seen && <div className='w-3 h-3 bg-blue-500 rounded-full'>1</div>}
        </div>
      </div>
    </Link>
   
  
  ))
}
</div>

    </div>
  )
}

export default Recent