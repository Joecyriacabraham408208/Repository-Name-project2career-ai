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
        response.data.forks_count,
      description:
        response.data.description,
      openIssues:
        response.data.open_issues_count,
      watchers:
        response.data.watchers_count,
      defaultBranch:
        response.data.default_branch
    };

  }
  catch (error) {

    throw new Error(
      "Repository not found"
    );

  }

};

module.exports = {
  getRepositoryMetadata
};