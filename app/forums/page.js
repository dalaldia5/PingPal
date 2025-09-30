import React from "react";
import Image from "next/image";
import Link from "next/link";

const topics = [
  {
    text: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
    desc: "Discuss everything about Python programming, from basics to advanced frameworks.",
    gradient: "from-blue-500 to-cyan-500",
    slug: "Python Programming",
    members: "12.5k",
    posts: "45.2k",
  },
  {
    text: "JavaScript",
    img: "https://skillforge.com/wp-content/uploads/2020/10/javascript-266x300.png",
    desc: "All things JavaScript, from frontend frameworks to Node.js backend development.",
    gradient: "from-yellow-500 to-orange-500",
    slug: "JavaScript Development",
    members: "18.7k",
    posts: "62.1k",
  },
  {
    text: "C++",
    img: "https://raw.githubusercontent.com/Benio101/cpp-logo/master/cpp_logo.png",
    desc: "Master data structures, algorithms, and system programming with C++.",
    gradient: "from-red-500 to-pink-500",
    slug: "CPP Coding",
    members: "8.3k",
    posts: "28.9k",
  },
  {
    text: "AI & Machine Learning",
    img: "https://cdn-icons-png.flaticon.com/512/4520/4520677.png",
    desc: "Explore artificial intelligence, ML models, neural networks, and deep learning.",
    gradient: "from-purple-500 to-indigo-500",
    slug: "AI & Machine Learning",
    members: "15.2k",
    posts: "38.7k",
  },
  {
    text: "Web Development",
    img: "https://www.svgrepo.com/show/249745/coding-web-development.svg",
    desc: "From HTML, CSS, React to full-stack applications and modern frameworks.",
    gradient: "from-green-500 to-emerald-500",
    slug: "Web Development ",
    members: "22.1k",
    posts: "78.4k",
  },
  {
    text: "Cybersecurity",
    img: "https://cdn-icons-png.flaticon.com/512/2974/2974524.png",
    desc: "Share knowledge on ethical hacking, cryptography, and system security practices.",
    gradient: "from-indigo-500 to-purple-500",
    slug: "Cybersecurity",
    members: "9.8k",
    posts: "31.5k",
  },
];

const Forums = () => {
  return (
    <div className="min-h-screen w-full pt-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6">
            <span className="text-sm font-semibold text-white">
              💬 Community Forums
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-gradient-premium">Join the Discussion</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Connect with developers worldwide, share knowledge, and grow
            together in our vibrant community forums.
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-8 text-center">
            {[
              { label: "Active Members", value: "86.6k+" },
              { label: "Total Posts", value: "284.8k+" },
              { label: "Topics", value: "50+" },
            ].map((stat, index) => (
              <div key={index} className="glass-effect px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Forum Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={topic.text}
              className="group card-premium p-8 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${topic.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Image
                      width={48}
                      height={48}
                      src={topic.img}
                      alt={topic.text}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {topic.text}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {topic.desc}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-sm text-gray-400 mb-6">
                  <span>{topic.members} members</span>
                  <span>{topic.posts} posts</span>
                </div>

                {/* Button */}
                <Link href={`/forum/${topic.slug}`}>
                  <button
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${topic.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg relative overflow-hidden group/btn`}
                  >
                    <span className="relative z-10">Join Discussion</span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="card-premium p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't see your topic?
            </h3>
            <p className="text-gray-300 mb-8">
              Request a new forum category or start a discussion in our general
              community space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium hover-lift">
                Request New Forum
              </button>
              <button className="px-8 py-4 rounded-xl glass-effect text-white font-semibold hover-lift hover-glow transition-all duration-300 border border-white/20">
                Browse All Topics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forums;
