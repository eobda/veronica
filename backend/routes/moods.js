const axios = require('axios');
const db = require('../db/connection');
const { addMood } = require('../db/queries/moods');
const router = require('express').Router();

// ADD mood
router.post("/", async (req, res) => {
  try {
    const newMood = req.body; // should contain name
    newMood.user_id = 1; // to be updated once login/cookies are implemented
    newMood.date_added = new Date();

    const response = await addMood(newMood);
    console.log('Mood added');
    res.status(201).send(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;