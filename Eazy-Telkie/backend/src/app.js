const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const chatbotRoutes = require("./routes/chatbot");
const coverageRoutes = require("./routes/coverage");
const dealsRoutes = require("./routes/deals");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/coverage", coverageRoutes);
app.use("/api/deals", dealsRoutes);

module.exports = app;
