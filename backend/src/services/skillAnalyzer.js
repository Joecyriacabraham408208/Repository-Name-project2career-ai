const {
  getRepositoryMetadata
} = require("./githubService");

const {
  findRepository
} = require("./repositoryService");
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

const analyzeRepository = (repository,metadata) => {

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

  if (metadata.stars > 20) {
  careerSuggestions.push(
    "Open Source Contributor"
  );
}

  return {
    skills,
    careerSuggestions
  };
};

const getRepositoryFromUrl = (
  githubUrl
) => {

  const parsedData =
    parseGithubUrl(githubUrl);

  const repositoryName =
    parsedData.repository
      .toLowerCase();

  const repository =
    findRepository(repositoryName);

  return (
    repository ||
    getRepositoryByName(
      "Portfolio App"
    )
  );

};
const analyzeSkills = (githubUrl) => {

  const parsedData =
    parseGithubUrl(githubUrl);

  console.log(parsedData);

  const metadata =
    getRepositoryMetadata(
      parsedData.owner,
      parsedData.repository
    );

  console.log(metadata);

  const repository =
    getRepositoryFromUrl(githubUrl);

  return analyzeRepository(repository,metadata);

};

module.exports = {
  analyzeSkills,
  getRepositoryByName,
  analyzeRepository,
  getRepositoryFromUrl
};
