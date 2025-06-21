// Simple Express server that provides a list of users at the /app endpoint

const express = require("express");
const cors = require("cors");

const app = express();
// This is a simple Express server that provides a list of users at the /api endpoint
// and allows cross-origin requests from a specified frontend URL.
// It uses the cors middleware to handle CORS and express.json() to parse JSON request bodies.

// Import necessary modules
// Initialize the Express application and configure CORS
const corsOptions = {
  origin: "http://localhost:5173", // Adjust this to your frontend's URL
};

app.use(cors(corsOptions));

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the User API!");
});

// GET /app - returns a JSON object with a list of users

app.get("/api", (req, res) => {
  res.json({ users: ["Royyan Ayeloja", "Fatai Ayeloja", "Mujidat Ayeloja"] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
