import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaStar,
} from "react-icons/fa";

export const metadata = {
  title: "Home - PingPal-v2",
  description: "PingPal helps you chat with your loved ones seamlessly.",
};

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 premium-gradient">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="slide-up-animation">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
              <FaStar className="text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-white">
                Premium Chat Experience
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl font-black leading-tight mb-6">
              <span className="text-gradient-premium block">PingPal</span>
              <span className="text-white text-4xl sm:text-5xl font-bold">
                Connect Beyond Words
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-200 max-w-xl leading-relaxed">
              Experience the future of communication with our premium chat
              platform. Connect, share, and create unforgettable moments with
              crystal-clear quality and enterprise-grade security.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mt-8 mb-8">
              {[
                { icon: FaRocket, text: "Lightning Fast" },
                { icon: FaShieldAlt, text: "End-to-End Encrypted" },
                { icon: FaUsers, text: "Team Collaboration" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 glass-dark rounded-full"
                >
                  <feature.icon className="text-blue-400 mr-2 text-sm" />
                  <span className="text-sm font-medium text-white">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#features" className="btn-premium hover-lift group">
                <span className="relative z-10">Start Your Journey</span>
              </a>
              <a
                href="https://github.com/dalaldia5/PingPal"
                target="_blank"
                className="px-8 py-4 rounded-xl glass-effect text-white font-semibold hover-lift hover-glow transition-all duration-300 border border-white/20"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative scale-in-animation">
            <div className="relative p-8 rounded-3xl glow-box">
              <div className="absolute inset-0 premium-gradient rounded-3xl opacity-20"></div>
              <Image
                src="https://static.vecteezy.com/system/resources/previews/003/483/463/non_2x/chatting-concept-online-talking-speak-conversation-dialog-vector.jpg"
                alt="PingPal Illustration"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl floating-anim"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-ping delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-32 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6">
              <span className="text-sm font-semibold text-white">
                ✨ Premium Features
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-premium">
                Redefining Communication
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation features designed to elevate your
              conversations and bring people closer together than ever before.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Lightning Speed",
                description:
                  "Messages delivered in milliseconds with our optimized infrastructure",
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "rgba(56,189,248,0.3)",
              },
              {
                icon: "🎨",
                title: "Rich Media",
                description:
                  "Share 4K images, videos, documents, and interactive content seamlessly",
                gradient: "from-purple-500 to-pink-500",
                glowColor: "rgba(147,51,234,0.3)",
              },
              {
                icon: "🔒",
                title: "Military-Grade Security",
                description:
                  "End-to-end encryption with quantum-resistant algorithms",
                gradient: "from-green-500 to-emerald-500",
                glowColor: "rgba(34,197,94,0.3)",
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description:
                  "Connect with anyone, anywhere, with 99.9% uptime guarantee",
                gradient: "from-orange-500 to-red-500",
                glowColor: "rgba(249,115,22,0.3)",
              },
              {
                icon: "🤖",
                title: "AI-Powered",
                description:
                  "Smart suggestions, real-time translation, and intelligent organization",
                gradient: "from-indigo-500 to-purple-500",
                glowColor: "rgba(99,102,241,0.3)",
              },
              {
                icon: "📱",
                title: "Cross-Platform",
                description:
                  "Seamless experience across all devices with cloud synchronization",
                gradient: "from-teal-500 to-blue-500",
                glowColor: "rgba(20,184,166,0.3)",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group card-premium p-8 hover-lift"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 0 30px ${feature.glowColor}`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative px-6 py-32 premium-gradient">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-effect mb-6">
              <span className="text-sm font-semibold text-white">
                💎 Premium Plans
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-premium">
                Choose Your Experience
              </span>
            </h2>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Unlock the full potential of premium communication with plans
              designed for every need, from personal to enterprise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="group card-premium p-8 hover-lift relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-300">Perfect for getting started</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-5xl font-black text-white">$0</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited Messages",
                  "Basic Media Sharing",
                  "Standard Support",
                  "Mobile & Web Access",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <FaCheck className="text-blue-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full btn-premium">Get Started Free</button>
            </div>

            {/* Pro Plan - Featured */}
            <div className="group card-premium p-8 hover-lift relative border-2 border-purple-500/50 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Professional
                </h3>
                <p className="text-gray-300">For power users and teams</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-5xl font-black text-white">$12</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Starter",
                  "4K Media & File Sharing",
                  "Group Video Calls",
                  "Cloud Storage (100GB)",
                  "Priority Support",
                  "Advanced Security",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <FaCheck className="text-purple-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                Upgrade to Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="group card-premium p-8 hover-lift relative">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl">
                  🏢
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Enterprise
                </h3>
                <p className="text-gray-300">For large organizations</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-5xl font-black text-white">$49</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Pro",
                  "Unlimited Storage",
                  "Advanced Analytics",
                  "Custom Integrations",
                  "24/7 Dedicated Support",
                  "SLA Guarantee",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <FaCheck className="text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 mb-4">
              All plans include a 14-day free trial
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>✓ No setup fees</span>
              <span>✓ Cancel anytime</span>
              <span>✓ 99.9% uptime SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 py-20 bg-slate-950 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <Link
                href="/"
                className="text-3xl font-black text-gradient-premium mb-4 inline-block"
              >
                PingPal
              </Link>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Revolutionizing communication with premium features,
                enterprise-grade security, and an unparalleled user experience.
              </p>
              <div className="flex space-x-4">
                {["🐦", "📘", "📸", "💼"].map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <span className="text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "Security", "Integrations"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {["Help Center", "Contact Us", "Status", "Community"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PingPal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
