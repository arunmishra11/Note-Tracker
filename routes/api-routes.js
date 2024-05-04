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

