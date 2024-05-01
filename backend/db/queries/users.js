const db = require('../connection');

// Add new user to db
const addUser = function(user) {
  const queryString = `INSERT INTO users (username, name, password) VALUES ($1, $2, $3) RETURNING id;`
  const queryParams = [user.username, user.username, user.password];

  return db
    .query(queryString, queryParams)
    .then((data) => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log(`Error in addUser: ${error.message}`);
    });
};

module.exports = { addUser };