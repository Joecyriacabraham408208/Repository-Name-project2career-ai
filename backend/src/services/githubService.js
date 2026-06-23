const getRepositoryMetadata = (
  owner,
  repository
) => {

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