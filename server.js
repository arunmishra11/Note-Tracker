// Importing the express library/module
const express = require('express');

// Importing custom HTML routes module
const html_routes = require('./routes/html-routes')

// Importing custom API routes module
const api_routes = require('./routes/api-routes')

// Setting the port for the server to listen on, using environment variable if available, otherwise using port 3001
const PORT = process.env.PORT || 3001;

// Creating an instance of the Express application
const app = express();

// Express middleware to parse url-encoded data, setting 'extended' option to false for querystring parsing
app.use(express.urlencoded({ extended: false }));

// Express middleware to parse JSON data
app.use(express.json());

// Express middleware to serve static files such as images, CSS, JavaScript files, etc. from the 'public' directory
app.use(express.static("public"));

// Mounting the HTML routes middleware
app.use(html_routes)

// Mounting the API routes middleware
app.use(api_routes)

// Start the Express server and make it listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
