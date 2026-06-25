const {
  analyzeSkills
} = require("../services/skillAnalyzer");

const analyzeProject = async (
  req,
  res
) => {

  try {

    if (!req.body.githubUrl) {

      return res.status(400).json({
        success: false,
        message:
          "GitHub URL is required"
      });

    }

    const githubUrl =
      req.body.githubUrl;

    const result =
      await analyzeSkills(
        githubUrl
      );

    res.json({
      success: true,
      receivedUrl: githubUrl,
      skills: result.skills,
      careerSuggestions:
        result.careerSuggestions,
      projectScore:
        result.projectScore,
      repositoryRating:
        result.repositoryRating,
      metadata:
        result.metadata
    });

  }
  catch (error) {

    res.status(400).json({
      success: false,
      message:
        error.message
    });

  }

};

module.exports = {
  analyzeProject
};