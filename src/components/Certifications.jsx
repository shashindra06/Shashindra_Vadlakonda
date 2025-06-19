import React from "react";

const certifications = [
  "Machine Learning - Teachnook & IIT Roorkee (Cognizance'24)",
  "ML Mentorship - BTech Walleh + Teachnook",
  "Data Analysis with Python - FreeCodeCamp",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {certifications.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
} 