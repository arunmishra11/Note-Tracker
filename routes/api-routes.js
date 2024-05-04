const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
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
router.get("/api/notes", (req, res) => {
  // Read data from the JSON file
  const dbJson = readJSONFile("db/db.json");
  // Send the JSON data as response
  res.json(dbJson);
});
// POST request handler for '/api/notes' endpoint
router.post("/api/notes", (req, res) => {
  // Read data from the JSON file
  const dbJson = readJSONFile("db/db.json");
  // Create a new note object with UUID
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  // Add the new note to the JSON data
  dbJson.push(newNote);
  // Write updated data back to the JSON file
  writeJSONFile("db/db.json", dbJson);
  // Send the updated JSON data as response
  res.json(dbJson);
});
