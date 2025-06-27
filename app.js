const express = require("express");
const app = express();
const ideaRoutes = require("./routes/ideaRoutes");

app.use(express.json());
app.use("/ideas", ideaRoutes);

module.exports = app;