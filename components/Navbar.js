"use client";
import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-gradient-premium hover:scale-105 transition-transform duration-300 relative group"
        >
          PingPal
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-1">
          {[
            { href: "/", label: "Home" },
            { href: "/forums", label: "Forums" },
            { href: "/chat", label: "Chat" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 group hover:bg-white/10"
            >
              <span className="flex items-center space-x-2">
                <span>{link.label}</span>
              </span>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Active indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* CTA Button */}
          <Link
            href="#pricing"
            className="hidden sm:block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Get Started
          </Link>

          {/* User Button with enhanced styling */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox:
                    "w-10 h-10 rounded-full border-2 border-white/20 hover:border-white/40 transition-colors duration-300",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
