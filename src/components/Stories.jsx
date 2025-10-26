import React, { useEffect } from 'react'
import { useState } from 'react'
import { dummyStoriesData } from '../assets/assets'

const Stories = () => {
  const [stories,setStories]=useState([])
  const fetchStories=async ()=>{
    setStories(dummyStoriesData)
  }
  useEffect(()=>{
    fetchStories()
  },[])
  return (
    <div className='w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-c-auto px-4'>
      
      Stories
    
    </div>
  )
}

export default Stories