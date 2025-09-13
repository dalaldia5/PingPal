import React from "react";
import Image from "next/image";

const topics = [
  {
    text: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
    desc: "Discuss everything about Python programming.",
    glow: "shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:shadow-[0_0_50px_rgba(56,189,248,0.8)]",
  },
  {
    text: "JavaScript",
    img: "https://skillforge.com/wp-content/uploads/2020/10/javascript-266x300.png",
    desc: "All things JavaScript, from frontend to backend.",
    glow: "shadow-[0_0_35px_rgba(234,179,8,0.5)] hover:shadow-[0_0_50px_rgba(234,179,8,0.8)]",
  },
  {
    text: "C++",
    img: "https://raw.githubusercontent.com/Benio101/cpp-logo/master/cpp_logo.png",
    desc: "Talk about data structures, algorithms, and system programming in C++.",
    glow: "shadow-[0_0_35px_rgba(239,68,68,0.5)] hover:shadow-[0_0_50px_rgba(239,68,68,0.8)]",
  },
  {
    text: "AI & Machine Learning",
    img: "https://cdn-icons-png.flaticon.com/512/4520/4520677.png",
    desc: "Dive into artificial intelligence, ML models, and deep learning.",
    glow: "shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]",
  },
  {
    text: "Web Development",
    img: "https://www.svgrepo.com/show/249745/coding-web-development.svg",
    desc: "From HTML, CSS, and React to full-stack web apps.",
    glow: "shadow-[0_0_35px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)]",
  },
  {
    text: "Cybersecurity",
    img: "https://cdn-icons-png.flaticon.com/512/2974/2974524.png",
    desc: "Share knowledge on ethical hacking, cryptography, and system security.",
    glow: "shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(99,102,241,0.8)]",
  },
];

const Forums = () => {
  return (
    <div className="container mx-auto my-28 px-6">
      <h1
        className="text-5xl md:text-6xl font-extrabold text-center 
        bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 
        bg-clip-text text-transparent 
        drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] 
        tracking-tight"
      >
        Discussion Forums
      </h1>

      <div className="flex flex-wrap justify-center gap-12 lg:gap-16 mt-16">
        {topics.map((topic) => {
          return (
            <div
              key={topic.img}
              className={`relative group w-72 p-8 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20
        transition-all duration-500 hover:scale-105 
        ${topic.glow}`}
            >
              {/* Icon */}
              <div className="flex justify-center">
                <Image
                  width={48}
                  height={48}
                  src={topic.img}
                  alt={topic.text}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Title */}
              <h2 className="mt-4 text-2xl font-bold text-white drop-shadow">
                {topic.text}
              </h2>

              {/* Description */}
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {topic.desc}
              </p>

              {/* Button */}
              <button
                className="mt-6 w-full cursor-pointer px-6 py-3 rounded-xl font-semibold text-white 
          bg-gradient-to-r from-sky-500 to-indigo-500 
          shadow-lg shadow-sky-500/30 
          transition-all duration-300 
          hover:from-indigo-500 hover:to-sky-500 
          hover:shadow-[0_0_30px_rgba(56,189,248,0.8)] 
          hover:scale-105 active:scale-95"
              >
                Discuss now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forums;
