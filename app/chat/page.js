import React from "react";

const Chat = () => {
  return (
    <div className="min-h-screen w-full pt-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center py-20">
        {/* Status Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-8">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-3"></div>
          <span className="text-sm font-semibold text-white">Coming Soon</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-black mb-8">
          <span className="text-gradient-premium block mb-4">Premium Chat</span>
          <span className="text-white text-4xl md:text-5xl font-bold">
            Experience Awaits
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
          Get ready for the most advanced chat experience ever created.
          Real-time messaging, crystal-clear video calls, and AI-powered
          features that will revolutionize how you connect.
        </p>

        {/* Feature Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "💬",
              title: "Real-time Messaging",
              description:
                "Lightning-fast message delivery with read receipts and typing indicators",
            },
            {
              icon: "🎥",
              title: "HD Video Calls",
              description:
                "Crystal-clear video calls with up to 50 participants simultaneously",
            },
            {
              icon: "🤖",
              title: "AI Assistant",
              description:
                "Smart suggestions, language translation, and conversation insights",
            },
          ].map((feature, index) => (
            <div key={index} className="card-premium p-6 hover-lift">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium hover-lift">Join Waitlist</button>
            <button className="px-8 py-4 rounded-xl glass-effect text-white font-semibold hover-lift hover-glow transition-all duration-300 border border-white/20">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-400">
            Be the first to experience the future of communication
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Development Progress</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[85%] relative">
              <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
