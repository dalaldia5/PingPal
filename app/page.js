import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Home - PingPal",
  description: "PingPal helps you chat with your loved ones seamlessly.",
};

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          Welcome to PingPal
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          Your favorite place to chat, connect, and share with friends.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="rounded-lg bg-sky-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-sky-400 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="rounded-lg border border-slate-600 px-5 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-slate-900">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Features that make chatting fun
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            PingPal offers modern tools to make your conversations more lively,
            private, and productive.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:border-sky-500"
          >
            <h3 className="text-xl font-semibold">Instant Messaging</h3>
            <p className="mt-2 text-slate-400">
              Send and receive messages in real time with lightning speed.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] hover:border-purple-500"
          >
            <h3 className="text-xl font-semibold">Media Sharing</h3>
            <p className="mt-2 text-slate-400">
              Share photos, videos, and documents seamlessly.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:border-green-500"
          >
            <h3 className="text-xl font-semibold">Secure & Private</h3>
            <p className="mt-2 text-slate-400">
              All conversations are protected with end-to-end encryption.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Choose the plan that fits your chatting needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Plan 1: Free */}
          <div
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:border-sky-500"
          >
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="mt-2 text-slate-400">
              Basic features for personal use.
            </p>
            <p className="mt-6 text-4xl font-bold">$0</p>
            <ul className="mt-6 space-y-3 text-left text-slate-300">
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
              className="mt-8 rounded-lg bg-sky-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-sky-400 transition text-center"
            >
              Get Started
            </a>
          </div>

          {/* Plan 2: Pro */}
          <div
            className="bg-slate-800/80 border-2 border-sky-500 rounded-2xl p-8 flex flex-col relative 
              shadow-2xl shadow-sky-500/10 transition-all duration-300 
              hover:shadow-[0_0_30px_rgba(56,189,248,0.8)] hover:scale-105"
          >
            <span className="absolute -top-4 right-6 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Popular
            </span>
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-2 text-slate-400">
              Advanced features for power users.
            </p>
            <p className="mt-6 text-4xl font-bold">$9.99</p>
            <ul className="mt-6 space-y-3 text-left text-slate-300">
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
              className="mt-8 rounded-lg bg-sky-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-sky-400 transition text-center"
            >
              Upgrade Now
            </a>
          </div>

          {/* Plan 3: Enterprise */}
          <div
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:border-green-500"
          >
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 text-slate-400">
              Complete solution for organizations.
            </p>
            <p className="mt-6 text-4xl font-bold">$29.99</p>
            <ul className="mt-6 space-y-3 text-left text-slate-300">
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
              className="mt-8 rounded-lg bg-green-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-green-400 transition text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
