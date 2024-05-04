// Importing the express library/module
const express = require('express');

// Importing custom HTML routes module
const htmlRoutes = require('./routes/html-routes');

// Importing custom API routes module
const apiRoutes = require('./routes/api-routes');

// Setting the port for the server to listen on, using environment variable if available, otherwise using port 3001
const PORT = process.env.PORT || 3001;

// Creating an instance of the Express application
const app = express();

// Middleware

// Parsing url-encoded data
app.use(express.urlencoded({ extended: false }));

// Parsing JSON data
app.use(express.json());

// Serving static files such as images, CSS, JavaScript files, etc. from the 'public' directory
app.use(express.static("public"));

// Mounting the HTML routes middleware
app.use(htmlRoutes);

// Mounting the API routes middleware
app.use(apiRoutes);

// Start the Express server and make it listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
    