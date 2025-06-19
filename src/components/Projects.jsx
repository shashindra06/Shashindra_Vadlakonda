import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Retail Sales Dashboard",
    description: [
      "Analyzed £14.7M in UK retail sales across 800K+ transactions.",
      "Built interactive dashboard using Python, SQL, Streamlit, and Plotly.",
      "Added business insights, inventory suggestions, and filters.",
    ],
    link: "https://lnkd.in/guykVQ45",
  },
  {
    title: "Stock Movement Predictor",
    description: [
      "Predicted stock UP/DOWN using tweet sentiment + stock price trends.",
      "Used VADER, yfinance, and ML classifiers.",
      "Built dataset, visualized trends, and trained logistic regression model.",
    ],
  },
  {
    title: "Object Detection (CNN)",
    description: [
      "Built an object detection system on CIFAR-10 using Keras + TensorFlow.",
      "Applied CNNs for image classification.",
      "Gradio interface used for interactive predictions.",
    ],
  },
  {
    title: "NLP: Sentiment & Readability Analyzer",
    description: [
      "Web scraped articles and evaluated sentiment + readability.",
      "Used stopwords, sentiment dictionary, and readability formulas.",
      "Exported insights to Excel.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
} 