const db = require('../connection');

// Get mood for certain date in db
const getMoodByDateAdded = function(userID) {
  const queryString = `SELECT name FROM moods WHERE date_added = CURRENT_DATE AND user_id = $1`;
  const queryParams = [userID];

  return db.query(queryString, queryParams)
  .then((data) => {
    console.log(data.rows[0]);
    return data.rows[0];
  })
};

// Get all moods for a certain MONTH in db
// dateRange should be an array - [0] is the minimum date and [1] is the max
const getMoodByMonth = function(userID, dateRange) {
  const queryString = `SELECT * FROM moods
    WHERE user_id = $1
    AND date_added >= $2
    AND date_added < $3;`;
  const queryParams = [userID, dateRange[0], dateRange[1]];

  return db
    .query(queryString, queryParams)
    .then((data) => {
      console.log(data.rows[0]);
      return data.rows[0];
    })
    .catch((error) => {
      console.log(`Error in getMoodByMonth: ${error.message}`);
    });
}

// Insert mood to db
const addMood = function(mood) {
  const queryString = `INSERT INTO moods (name, user_id, date_added) VALUES ($1, $2, CURRENT_DATE) RETURNING name;`;
  const queryParams = [mood.name, mood.user_id];

  return db
    .query(queryString, queryParams)
    .then((data) => {
      console.log(data.rows[0]);
      return data.rows[0];
    })
    .catch((error) => {
      console.log(`Error in addMood: ${error.message}`);
    });
};

module.exports = { addMood, getMoodByDateAdded };