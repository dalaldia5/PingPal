import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Home - PingPal",
  description: "PingPal helps you chat with your loved ones seamlessly.",
};

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-28 bg-white text-slate-900">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                PingPal
              </span>{" "}
              – Chat with your friends and more!
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Welcome to PingPal, the fun and easy way to connect with your
              friends and family. Stay in touch, share stories and laughs, and
              create lasting memories — all in one place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/dalaldia5/PingPal"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-slate-100 text-slate-900 border border-slate-300 hover:bg-slate-200 transition font-semibold"
              >
                View on GitHub
              </a>
              <a
                href="#features"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Start Chatting
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative p-4 rounded-3xl hero-glow">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/003/483/463/non_2x/chatting-concept-online-talking-speak-conversation-dialog-vector.jpg"
              alt="PingPal Illustration"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg floating-anim"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-gradient-to-br from-slate-950 to-slate-800 animated-gradient relative">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Features that make chatting fun ✨
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            PingPal offers modern tools to make your conversations more lively,
            private, and productive.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-10 text-center transition-all duration-500 hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:border-sky-500 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-sky-400">
              Instant Messaging
            </h3>
            <p className="mt-3 text-slate-300">
              Send and receive messages in real time with lightning speed.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-10 text-center transition-all duration-500 hover:shadow-[0_0_35px_rgba(147,51,234,0.7)] hover:border-purple-500 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-purple-400">
              Media Sharing
            </h3>
            <p className="mt-3 text-slate-300">
              Share photos, videos, and documents seamlessly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-10 text-center transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] hover:border-green-500 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-green-400">
              Secure & Private
            </h3>
            <p className="mt-3 text-slate-300">
              All conversations are protected with end-to-end encryption.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24 bg-gradient-to-br from-slate-900 to-slate-700 animated-gradient relative">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Simple, transparent pricing 💎
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your chatting needs.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Plan 1: Free */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-10 flex flex-col transition-all duration-500 hover:shadow-[0_0_35px_rgba(56,189,248,0.8)] hover:border-sky-500 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-sky-400">Free</h3>
            <p className="mt-2 text-slate-300">
              Basic features for personal use.
            </p>
            <p className="mt-6 text-4xl font-bold">$0</p>
            <ul className="mt-6 space-y-3 text-left text-slate-200">
              <li className="flex items-center">
                <FaCheck className="h-5 w-5 text-sky-400 mr-3" /> Unlimited
                Messages
              </li>
              <li className="flex items-center">
                <FaCheck className="h-5 w-5 text-sky-400 mr-3" /> Media Sharing
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 rounded-xl bg-gradient-to-r from-sky-500 to-purple-500 px-5 py-3 text-base font-medium text-white shadow-lg hover:scale-110 transition text-center"
            >
              Get Started
            </a>
          </div>

          {/* Plan 2: Pro */}
          <div className="bg-slate-800/80 border-2 border-sky-500 rounded-2xl p-10 flex flex-col relative shadow-2xl shadow-sky-500/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(56,189,248,1)] hover:-translate-y-3">
            <span className="absolute -top-4 right-6 bg-gradient-to-r from-sky-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              Popular
            </span>
            <h3 className="text-2xl font-semibold text-sky-400">Pro</h3>
            <p className="mt-2 text-slate-300">
              Advanced features for power users.
            </p>
            <p className="mt-6 text-4xl font-bold">$9.99</p>
            <ul className="mt-6 space-y-3 text-left text-slate-200">
              <li className="flex items-center">
                <FaCheck className="h-5 w-5 text-sky-400 mr-3" /> All Free
                features
              </li>
              <li className="flex items-center">
                <FaCheck className="h-5 w-5 text-sky-400 mr-3" /> Group Video
                Calls
              </li>
              <li className="flex items-center">
                <FaCheck className="h-5 w-5 text-sky-400 mr-3" /> Cloud Backup
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 rounded-xl bg-gradient-to-r from-sky-500 to-purple-500 px-5 py-3 text-base font-medium text-white shadow-lg hover:scale-110 transition text-center"
            >
              Upgrade Now
            </a>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-10 flex flex-col transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.9)] hover:border-green-500 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold text-green-400">
              Enterprise
            </h3>
            <p className="mt-2 text-slate-300">
              Complete solution for organizations.
            </p>
            <p className="mt-6 text-4xl font-bold">$29.99</p>
            <ul className="mt-6 space-y-3 text-left text-slate-200">
              <li className="flex items-center">
                <FaCheck className="h-5 w-5 text-green-400 mr-3" /> All Pro
                features
              </li>
              <li className="flex items-center">
                <FaCheck className="h-5 w-5 text-green-400 mr-3" /> Dedicated
                Support
              </li>
              <li className="flex items-center">
                <FaCheck className="h-5 w-5 text-green-400 mr-3" /> Admin
                Dashboard
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 text-base font-medium text-white shadow-lg hover:scale-110 transition text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
