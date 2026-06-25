const axios = require("axios");

const getRepositoryMetadata = async (
  owner,
  repository
) => {

  try {

  const response =
    await axios.get(
      `https://api.github.com/repos/${owner}/${repository}`
    );

  return {
    owner,
    repository,
    language:
      response.data.language,
    stars:
      response.data.stargazers_count,
    forks:
      response.data.forks_count
  };

}
catch (error) {

  throw new Error(
    "Repository not found"
  );

}

  return {
    owner,
    repository,
    language:
      response.data.language,
    stars:
      response.data.stargazers_count,
    forks:
      response.data.forks_count
  };

};

module.exports = {
  getRepositoryMetadata
};