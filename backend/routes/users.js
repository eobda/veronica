const axios = require('axios');
const { addUser, getUserByUsername } = require('../db/queries/users');
const router = require('express').Router();

// Register user
router.post("/new", async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  };
});

// Log in user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userInfo = await getUserByUsername(username);
    // user auth to be updated
    if (userInfo == 'Username not found') {
      res.status(404).send(userInfo);
    }
    if (password !== userInfo.password) {
      res.status(403).send('Incorrect password');
    }
    res.status(200).send(userInfo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  };
});

module.exports = router;