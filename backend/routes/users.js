const axios = require('axios');
const { addUser, getUserByUsername } = require('../db/queries/users');
const router = require('express').Router();
const bcrypt = require('bcryptjs');

// Register user
router.post("/new", async (req, res) => {
  try {
    const userInfo = {
      username: req.body.username,
      name: req.body.username,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    };
    const userCheck = await getUserByUsername(userInfo.username);
    if (userCheck === 'Username not found') {
      res.status(400).send({message: 'Username already exists'})
    } else {
      const newUser = await addUser(userInfo);
      res.status(201).send(newUser);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({message: 'Server error'});
  };
});

// Log in user
router.post("/login", async (req, res) => {
  try {
    const { username } = req.body;
    const userInfo = await getUserByUsername(username);
    // user auth to be updated
    if (userInfo == 'Username not found') {
      res.status(404).send(userInfo);
    }
    if (!bcrypt.compareSync(req.body.password, userInfo.password)) {
      res.status(403).send({message: 'Incorrect password'});
    }
    res.status(200).send(userInfo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({message: 'Server error'});
  };
});

module.exports = router;