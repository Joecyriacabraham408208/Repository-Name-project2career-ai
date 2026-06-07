const analyzeProject = (req, res) => {

  const githubUrl = req.body.githubUrl;

  let skills = [];

  let carrierSuggestion=[];

  if (githubUrl.toLowerCase().includes("react")) {
    skills.push("React");
    carrierSuggestion.push("Frontend Developer");
  }

  if (githubUrl.toLowerCase().includes("node")) {
    skills.push("Node.js");
    carrierSuggestion.push("Backend Developer");
  }

  if (githubUrl.toLowerCase().includes("python")) {
    skills.push("Python");
    carrierSuggestion.push("Python Developer");
  }

  if( skills.includes("React") && skills.includes("Node.js")){
    carrierSuggestion.push("Full Stack Developer");
  }

  if (skills.length === 0) {
    skills.push("HTML");
    skills.push("CSS");
    skills.push("JavaScript");
  }

  res.json({
    success: true,
    receivedUrl: githubUrl,
    skills: skills,
    carrierSuggestion: carrierSuggestion
  });

};

module.exports = {
  analyzeProject
};