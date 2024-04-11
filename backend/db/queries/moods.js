const db = require('../connection');

// Insert mood to db
const addMood = function(mood) {
  const queryString = `INSERT INTO moods (name, user_id, date_added) VALUES ($1, $2, $3) RETURNING name;`;
  const queryParams = [mood.name, mood.user_id, mood.date];

  return db.query(queryString, queryParams)
    .then((data) => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log(`Error in addMood: ${error.message}`);
    })
};

module.exports = { addMood };