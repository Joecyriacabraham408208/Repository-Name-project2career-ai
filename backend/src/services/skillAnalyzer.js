
const {
  parseGithubUrl
} = require("./githubParser");
const careerMappings = require("../data/careerMappings");
const repositoryData = require("../data/repositoryData");

const getRepositoryByName = (repoName) => {

  return repositoryData.find(
    repo => repo.name === repoName
  );

};

const analyzeRepository = (repository) => {

  let skills = [];
  let careerSuggestions = [];

  if (repository.technologies.includes("React")) {
    skills.push("React");
    careerSuggestions.push(careerMappings.React);
  }

  if (repository.technologies.includes("Node.js")) {
    skills.push("Node.js");
    careerSuggestions.push(careerMappings["Node.js"]);
  }

  if (repository.technologies.includes("Python")) {
    skills.push("Python");
    careerSuggestions.push(careerMappings.Python);
  }

  if (
    skills.includes("React") &&
    skills.includes("Node.js")
  ) {
    careerSuggestions.push("Full Stack Developer");
  }

  return {
    skills,
    careerSuggestions
  };
};

const getRepositoryFromUrl = (githubUrl) => {

  const parsedData =
    parseGithubUrl(githubUrl);

  const repositoryName =
    parsedData.repository.toLowerCase();

  if (repositoryName.includes("portfolio")) {
    return getRepositoryByName("Portfolio App");
  }

  if (repositoryName.includes("ai")) {
    return getRepositoryByName("AI Project");
  }

  if (repositoryName.includes("ecommerce")) {
    return getRepositoryByName("Ecommerce Website");
  }

  return getRepositoryByName("Portfolio App");

};

const analyzeSkills = (githubUrl) => {

  const parsedData =
    parseGithubUrl(githubUrl);

  console.log(parsedData);

  const repository =
    getRepositoryFromUrl(githubUrl);

  return analyzeRepository(repository);

};

module.exports = {
  analyzeSkills,
  getRepositoryByName,
  analyzeRepository,
  getRepositoryFromUrl
};
