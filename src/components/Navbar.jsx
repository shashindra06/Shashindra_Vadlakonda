import React from "react";

const navLinks = [
  { name: "About", to: "#about" },
  { name: "Projects", to: "#projects" },
  { name: "Certifications", to: "#certifications" },
  { name: "Skills", to: "#skills" },
  { name: "Contact", to: "#contact" },
];

const socialLinks = [
  { name: "GitHub", url: "#", icon: "fa-github" },
  { name: "LinkedIn", url: "#", icon: "fa-linkedin" },
  { name: "Email", url: "mailto:shashindravadlakonda@gmail.com", icon: "fa-envelope" },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur z-50 shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <span className="font-bold text-xl text-blue-700">Shashindra</span>
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.to}
              className="text-gray-700 hover:text-blue-700 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 text-xl"
            >
              <i className={`fab ${link.icon}`}></i>
              {link.name === "Email" && <span className="sr-only">Email</span>}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
} 