const {
  analyzeSkills
} = require("../services/skillAnalyzer");

const analyzeProject = (req, res) => {

  const githubUrl = req.body.githubUrl;

  const result = analyzeSkills(githubUrl);

  res.json({
    success: true,
    receivedUrl: githubUrl,
    skills: result.skills,
    careerSuggestions: result.careerSuggestions
  });

};

module.exports = {
  analyzeProject
};