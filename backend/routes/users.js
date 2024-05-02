const axios = require('axios');
const { addUser } = require('../db/queries/users');
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

module.exports = router;