require("dotenv").config();
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

// Moods routes
app.use('/api/moods', require('./routes/moods'));
// Users routes
app.use('/api/users', require('./routes/users'));

// Start server
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});