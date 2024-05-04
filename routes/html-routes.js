const express = require('express');
const path = require('path');

const router = express.Router();

// Route handler for the root URL ('/')- index.html - when GET request is made
router.get('/', (req, res) => {
    // Send 'index.html' file as response
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route handler for '/notes' URL - notes.html - when GET request is made 
router.get('/notes', (req, res) => {
    // Send 'notes.html' file as response
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
