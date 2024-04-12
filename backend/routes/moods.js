const axios = require('axios');
const db = require('../db/connection');
const router = require('express').Router();

// ADD mood
router.post("/", async (req, res) => {
  try {

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});