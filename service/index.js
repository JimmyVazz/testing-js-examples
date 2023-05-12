const axios = require("axios");

const getDataService = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      throw new Error(error);
    });
};

module.exports = { getDataService };
