const axios = require('axios');
const db = require('../db/connection');
const { addMood, getTodayMood, getMoodByMonth } = require('../db/queries/moods');
const router = require('express').Router();

// GET mood by name
router.get("/", async (req, res) => {
  try {
    const userID = 1; // to be updated once login/cookies are implemented
    const todayMood = await getTodayMood(userID);
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
});

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

// GET mood by year and month
router.get("/:year/:month", async (req, res) => {
  try {
    const year = Number(req.params.year);
    const month = Number(req.params.month);
    // MIN of date range: YYYY-MM-01
    // MAX of date range: YYYY-MM+1-01
    const dateRange = [`${year}-${month}-01`, `${year}-${month + 1}-01`];
    const userID = 1; // to be updated once login/cookies are implemented

    const moods = await getMoodByMonth(userID, dateRange);
    console.log(moods);
    res.status(200).json(moods);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;