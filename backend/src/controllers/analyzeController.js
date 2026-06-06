const analyzeProject = (req, res) => {

  const githubUrl = req.body.githubUrl;

  let skills = [];

  if (githubUrl.toLowerCase().includes("react")) {
    skills.push("React");
  }

  if (githubUrl.toLowerCase().includes("node")) {
    skills.push("Node.js");
  }

  if (githubUrl.toLowerCase().includes("python")) {
    skills.push("Python");
  }

  if (skills.length === 0) {
    skills.push("HTML");
    skills.push("CSS");
    skills.push("JavaScript");
  }

  res.json({
    success: true,
    receivedUrl: githubUrl,
    skills: skills
  });

};

module.exports = {
  analyzeProject
};