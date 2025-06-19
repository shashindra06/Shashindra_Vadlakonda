import React from "react";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <ul className="text-gray-700 mb-4 list-disc list-inside">
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-700 hover:underline font-medium"
        >
          Live Demo &rarr;
        </a>
      )}
    </div>
  );
} 