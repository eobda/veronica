const db = require('../connection');

// Add new user to db
const addUser = function(user) {
  const queryString = `INSERT INTO users (username, name, password) VALUES ($1, $2, $3) RETURNING id;`
  const queryParams = [user.username.toLowerCase(), user.username, user.password];

  return db
    .query(queryString, queryParams)
    .then((data) => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log(`Error in addUser: ${error.message}`);
    });
};

const getUserByUsername = function(username) {
  const queryString = `SELECT * FROM users WHERE username = $1;`
  const queryParams = [username.toLowerCase()];

  return db
    .query(queryString, queryParams)
    .then((data) => {
      // If username does not exist in database, return message
      if (data.rows.length == 0) {
        return 'Username not found';
      }
      return data.rows[0];
    })
    .catch((error) => {
      console.log(`Error in getUserByUsername: ${error.message}`)
    });
};

module.exports = { addUser, getUserByUsername };