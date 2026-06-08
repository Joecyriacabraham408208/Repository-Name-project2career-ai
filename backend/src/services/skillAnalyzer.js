const careerMappings = require("../data/careerMappings");

const analyzeSkills = (githubUrl) => {

  let skills = [];
  let careerSuggestions = [];

  if (githubUrl.toLowerCase().includes("react")) {
    skills.push("React");
    careerSuggestions.push(careerMappings.React);
  }

  if (githubUrl.toLowerCase().includes("node")) {
    skills.push("Node.js");
    careerSuggestions.push(careerMappings["Node.js"]);
  }

  if (githubUrl.toLowerCase().includes("python")) {
    skills.push("Python");
    careerSuggestions.push(careerMappings.Python);
  }

  if (
    skills.includes("React") &&
    skills.includes("Node.js")
  ) {
    careerSuggestions.push("Full Stack Developer");
  }

  if (skills.length === 0) {
    skills.push("HTML");
    skills.push("CSS");
    skills.push("JavaScript");
  }

  return {
    skills,
    careerSuggestions
  };
};

module.exports = {
  analyzeSkills
};