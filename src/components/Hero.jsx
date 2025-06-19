import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 pt-28 pb-16 max-w-5xl mx-auto px-4">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Shashindra Vadlakonda
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Aspiring Software Engineer passionate about solving real-world problems using code.
        </p>
        <p className="text-gray-600 mb-6">
          Seeking opportunities to work on impactful software solutions.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 text-white px-6 py-2 rounded shadow hover:bg-blue-800 transition"
        >
          Contact Me
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 inline-block border border-blue-700 text-blue-700 px-6 py-2 rounded hover:bg-blue-700 hover:text-white transition"
        >
          View Resume
        </a>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/profile-placeholder.png"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-700 shadow-lg"
        />
      </div>
    </section>
  );
} 