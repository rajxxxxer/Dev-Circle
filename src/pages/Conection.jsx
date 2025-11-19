import { User, UserCheck, UserRoundPen, Users } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyConnectionsData, dummyFollowersData, dummyFollowingData, dummyPendingConnectionsData } from '../assets/assets';

const Conection = () => {
  const navi=useNavigate();
  const dataArr=[{ label:'Followers',value:dummyFollowersData,icon:Users},
  { label:'Following',value:dummyFollowingData,icon:UserCheck}  ,
  { label:'Requests',value:dummyPendingConnectionsData,icon:UserRoundPen},
  { label:'Connections',value:dummyConnectionsData,icon:Users}
  ]
  return (
    <div>
     <div>
    <div>  <h1 className="text-2xl font-bold text-gray-800 mb-1">Connections</h1>
      <p className="text-gray-500">Manage your connections and interactions</p></div>

      <div>
      {dataArr.map((item,idx)=>{
        return(
          <div key={idx}>
        <b>{item.value.length}</b>
        <p>{item.label}</p>
          </div>
        )
      })}

      </div>

      <div>
      {
        dataArr.map((tab)=>{
          return (
            <div>
           <button key={tab.label} onClick={()=>navi(`/connections/${tab.label.toLowerCase()}`)} className="flex items-center justify-between w-full bg-white shadow-sm border rounded-xl p-4 hover:shadow-md transition">

           </button>
              </div>
          )
        })
      }
      </div>
     </div>
    </div>
  )
}

export default Conection