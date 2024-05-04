const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

// Read JSON data from file
function readJSONFile(filePath) {
  const jsonData = fs.readFile(filePath, "utf8");
  return JSON.parse(jsonData);
}
// Function to write JSON data to file
const writeJSONFile = (filePath, jsonData) => {
    fs.writeFile(filePath, JSON.stringify(jsonData));
  };
// GET request handler for '/api/notes' endpoint
router.get('/api/notes', (req, res) => {
    // Read data from the JSON file
    const dbJson = readJSONFile("db/db.json");
    // Send the JSON data as response
    res.json(dbJson);
  });
  
