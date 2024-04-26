const axios = require('axios');
const { addUser } = require('../db/queries/users');
const router = require('express').Router();

// Register user
router.post("/new", async (req, res) => {
  try {
    const newUser = req.body;
    addUser(newUser)
      .then((data) => {
        return data; // set user id in session/jwt
      })
      .catch((error) => {
        console.log('Server error')
      })
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  };
});

module.exports = router;