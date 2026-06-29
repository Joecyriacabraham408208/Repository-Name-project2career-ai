const {
  getRepositoryMetadata
} = require("./githubService");

const {
  findRepository
} = require("./repositoryService");

const {
  parseGithubUrl
} = require("./githubParser");

const careerMappings =
  require("../data/careerMappings");

const repositoryData =
  require("../data/repositoryData");

const getRepositoryByName = (
  repoName
) => {

  return repositoryData.find(
    repo => repo.name === repoName
  );

};

const analyzeRepository = (
  repository,
  metadata
) => {

  let repositoryRating = "";
  let repositoryCategory = "";
  let skills = [];
  let careerSuggestions = [];
  let projectScore = 0;

  if (
    repository.technologies.includes(
      "React"
    )
  ) {

    skills.push("React");
    projectScore += 20;

    careerSuggestions.push(
      careerMappings.React
    );

  }

  if (
    repository.technologies.includes(
      "Node.js"
    )
  ) {

    skills.push("Node.js");
    projectScore += 20;

    careerSuggestions.push(
      careerMappings["Node.js"]
    );

  }

  if (
    repository.technologies.includes(
      "Python"
    )
  ) {

    skills.push("Python");
    projectScore += 20;

    careerSuggestions.push(
      careerMappings.Python
    );

  }

  if (
    skills.includes("React") &&
    skills.includes("Node.js")
  ) {

    careerSuggestions.push(
      "Full Stack Developer"
    );

  }

  if (metadata.stars > 20) {

    projectScore += 30;

    careerSuggestions.push(
      "Open Source Contributor"
    );

  }

  if (metadata.stars > 1000) {

  careerSuggestions.push(
    "Popular Open Source Project"
  );

}

if (metadata.watchers > 100) {

  careerSuggestions.push(
    "Community Driven Project"
  );

}

  if (metadata.forks > 5) {

    projectScore += 10;

  }

  if (projectScore >= 70) {

    repositoryRating =
      "Excellent";

  }
  else if (
    projectScore >= 40
  ) {

    repositoryRating =
      "Good";

  }
  else {

    repositoryRating =
      "Beginner";

  }

  if (metadata.stars > 1000) {

  repositoryCategory =
    "Enterprise Level";

}
else {

  repositoryCategory =
    "Standard Project";

}

  return {
  skills,
  careerSuggestions,
  projectScore,
  repositoryRating,
  repositoryCategory
};
};

const getRepositoryFromUrl = (
  repositoryName
) => {

  const repository =
    findRepository(
      repositoryName.toLowerCase()
    );

  return (
    repository ||
    getRepositoryByName(
      "Portfolio App"
    )
  );

};

const analyzeSkills = async(
  githubUrl
) => {

  const parsedData =
    parseGithubUrl(githubUrl);

  

  const metadata =
    await getRepositoryMetadata(
      parsedData.owner,
      parsedData.repository
    );

  
  const repository =
  getRepositoryFromUrl(
    parsedData.repository
  );
  const result =
  analyzeRepository(
    repository,
    metadata
  );



return {
  ...result,
  metadata
};
};

module.exports = {
  analyzeSkills,
  getRepositoryByName,
  analyzeRepository,
  getRepositoryFromUrl
};