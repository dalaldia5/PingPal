"use client";
import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";

const Navbar = () => {
//   const user = useUser();
  return (
    <nav
      className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-lg border-b border-transparent 
    [border-image:linear-gradient(to_right,theme(colors.sky.500),theme(colors.purple.500),theme(colors.pink.500))_1]"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight 
          bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 bg-clip-text text-transparent 
          hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.9)] transition-all duration-300"
        >
          PingPal
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-8 items-center font-medium text-slate-200">
          {[
            { href: "/", label: "Home", hover: "hover:text-sky-400" },
            {
              href: "/forums",
              label: "Forums",
              hover: "hover:text-purple-400",
            },
            { href: "/chat", label: "UserChat", hover: "hover:text-pink-400" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative ${link.hover} transition-colors duration-300 group`}
              >
                {link.label}
                {/* animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          {/* User Button */}
          <li className="ml-6">
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
