import React, { useState } from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { Search } from 'lucide-react'
import Usercard from '../components/Usercard'

const Discover = () => {
  const [input, setInput] = useState("")
  const [users, setUsers] = useState(dummyConnectionsData)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setLoading(true)
      setUsers([])

      setTimeout(() => {
        setUsers(dummyConnectionsData)
        setLoading(false)
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black">
      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* Glass Container */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Discover People
            </h1>
            <p className="text-gray-400">
              Connect with amazing people around you
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search people..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={handleSearch}
                className="w-full pl-11 pr-4 py-3 rounded-full
                           bg-white/10 text-white placeholder-gray-400
                           border border-white/10 outline-none
                           focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Users */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {loading ? (
              <p className="text-center text-gray-400 col-span-full py-12">
                Searching...
              </p>
            ) : (
              users.map((user) => (
                <div
                  key={user._id}
                  className="group bg-white/10 border border-white/10
                             rounded-2xl p-4 backdrop-blur-md
                             hover:bg-white/20 hover:-translate-y-1
                             hover:shadow-xl transition-all duration-300"
                >
                  <Usercard user={user} />
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Discover
