const getRepositoryMetadata = (
  owner,
  repository
) => {

  const repositoryName =
    repository.toLowerCase();

  if (
    repositoryName.includes("ai")
  ) {
    return {
      owner,
      repository,
      language: "Python",
      stars: 25,
      forks: 5
    };
  }

  if (
    repositoryName.includes("ecommerce")
  ) {
    return {
      owner,
      repository,
      language: "JavaScript",
      stars: 40,
      forks: 12
    };
  }

  return {
    owner,
    repository,
    language: "JavaScript",
    stars: 10,
    forks: 2
  };

};

module.exports = {
  getRepositoryMetadata
};