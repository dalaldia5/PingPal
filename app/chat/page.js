import React from 'react'

const Chat = () => {
  return (
    <div className="min-h-screen w-full py-28 px-6 bg-gradient-to-br from-[#0a0f1c] via-[#121826] to-[#1c1f2b] animated-gradient">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] tracking-tight btn-pulse">
        User Chat
      </h1>
      <p className="text-center text-slate-300 mt-8 text-lg">
        Coming soon: Connect and chat with your friends in real-time.
      </p>
      {/* You can add more premium elements here */}
    </div>
  )
}

export default Chat