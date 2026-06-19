
const repositoryData =
  require("../data/repositoryData");

const findRepository = (repositoryName) => {

  const normalizedName =
    repositoryName.replace("-", " ");

  return repositoryData.find(
    repo =>
      repo.name
        .toLowerCase()
        .includes(normalizedName)
  );

};

module.exports = {
  findRepository
};