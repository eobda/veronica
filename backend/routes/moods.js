const axios = require('axios');
const db = require('../db/connection');
const { addMood, getMoodByDateAdded } = require('../db/queries/moods');
const router = require('express').Router();

// GET mood by name
router.get("/", async (req, res) => {
  try {
    const userID = 1; // to be updated once login/cookies are implemented
    const todayMood = await getMoodByDateAdded(userID);
    if (!todayMood) {
      console.log('in the no todayMood')
      res.status(204).json({ name: '' });
    } else {
      res.status(200).json(todayMood);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
})

// ADD mood
router.post("/", async (req, res) => {
  try {
    const newMood = req.body; // should contain name
    newMood.user_id = 1; // to be updated once login/cookies are implemented

    const response = await addMood(newMood);
    console.log('Mood added');
    res.status(201).send(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;