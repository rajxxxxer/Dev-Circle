import React, { useState } from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { Search } from 'lucide-react'
import Usercard from '../components/Usercard'

const Discover = () => {
  const[input,setInput]=useState("")
  const[users,setUsers]=useState(dummyConnectionsData)
  const[loading,setLoading]=useState(false)
  const handleSearch=(e)=>{

    if(e.key==="Enter"){
setUsers([])
setTimeout(()=>{
  setUsers(dummyConnectionsData)
  setLoading(false)

},1000)
  }
}
  return (
    <div>
<div>
  <div>
    <h1>
      Discover People
    </h1>
    <p>connect with amazing people</p>
  </div>
  <div>
    <div>
      <div className='relative'>
<Search></Search>
<input  type="text" placeholder="Search..." value={input} onChange={(e)=>setInput(e.target.value)} onKeyUp={handleSearch}></input>
      </div>
    </div>
  </div>
  <div>
    {users.map((user)=>{
      return (
        <Usercard user={user} key={user._id}></Usercard>
      )
    })}
  </div>
</div>
    </div>
  )
}

export default Discover