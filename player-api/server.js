const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Load and parse player data
const players = JSON.parse(fs.readFileSync('./players_cleaned_v3.json', 'utf-8'));

// API route
app.get('/players', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(players, null, 2)); // pretty print
});

// Start the server
app.listen(PORT, () => {
  console.log(`Player API running at http://localhost:${PORT}/players`);
});
