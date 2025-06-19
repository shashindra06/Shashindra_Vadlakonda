import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Contact</h2>
        <p className="text-gray-700 mb-4">
          Interested in working together or have any questions? Reach out!
        </p>
        <a
          href="mailto:shashindravadlakonda@gmail.com"
          className="inline-block bg-blue-700 text-white px-6 py-2 rounded shadow hover:bg-blue-800 transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
} 