import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Skills</h2>
        <div className="mb-2">
          <span className="font-semibold">Languages & Tools:</span>
          <span className="ml-2 text-gray-700">
            Python, SQL, Pandas, NumPy, Streamlit, Scikit-learn, TensorFlow, Keras, Gradio
          </span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Tech Focus:</span>
          <span className="ml-2 text-gray-700">
            Data Analysis, Machine Learning, NLP, Computer Vision, Dashboards
          </span>
        </div>
        <div>
          <span className="font-semibold">Soft Skills:</span>
          <span className="ml-2 text-gray-700">
            Teamwork, Focus, Communication, Calm Under Pressure
          </span>
        </div>
      </div>
    </section>
  );
} 