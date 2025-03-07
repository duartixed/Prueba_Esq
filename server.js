const express = require('express');
const path = require('path');

const app = express();

// Serve static assets from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Route all requests to the main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});