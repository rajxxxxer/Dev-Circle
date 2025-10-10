import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messege from './pages/Messege'
import Chatbox from './pages/Chatbox'
import Conection from './pages/Conection'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Createpost from './pages/Createpost'

 const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Login></Login>} >
    <Route index element={<Feed></Feed>}></Route>
    <Route path="/messages" element={<Messege></Messege>}></Route>
    <Route path="/messages/:userId" element={<Chatbox></Chatbox>}></Route>
    <Route path="connection" element={<Conection></Conection>}></Route>
    <Route path="discover" element={<Discover></Discover>}></Route>
    <Route path="profile" element={<Profile></Profile>}></Route>
    <Route path="profile/:profileid" element={<Profile></Profile>}></Route>
    <Route path="create-post" element={<Createpost></Createpost>}></Route>
    
    </Route>

    </Routes>
    </>
  )
}

export default App
