const parseGithubUrl = (githubUrl) => {

  const parts = githubUrl.split("/");

  return {
    owner: parts[3],
    repository: parts[4]
  };

};

module.exports = {
  parseGithubUrl
};

