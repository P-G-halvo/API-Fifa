const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current folder
app.use(express.static(__dirname));

// Load the player data
const players = JSON.parse(fs.readFileSync('./players_cleaned_v3.json', 'utf-8'));

// JSON API route
app.use(cors());
app.get('/players', (req, res) => {
  res.json(players);
});

// Homepage route → load index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
