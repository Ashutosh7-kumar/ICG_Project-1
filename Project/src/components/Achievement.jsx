import React from "react";
import "./Achievement.css";

const achievements = [
  {
    title: "Best Innovation Award",
    description: "Recognized for outstanding innovation in web development.",
    year: 2024,
  },
  {
    title: "Hackathon Winner",
    description: "Won 1st place in the national coding hackathon.",
    year: 2023,
  },
  {
    title: "AI Project Recognition",
    description: "Developed an AI model for heart disease prediction.",
    year: 2022,
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to multiple open-source projects on GitHub.",
    year: 2022,
  },
  {
    title: "Web Development Mentor",
    description: "Mentored students in web development and React.js.",
    year: 2021,
  },
  {
    title: "Google Code-In Finalist",
    description: "Reached the final stage of Google Code-In competition.",
    year: 2020,
  },
];

const Achievement = () => {
  return (
    <div className="achievement-container">
      <h2 className="achievement-title">Achievements</h2>
      <div className="achievement-list">
        {achievements.map((ach, index) => (
          <div key={index} className="achievement-card">
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
            <span className="achievement-year">{ach.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
