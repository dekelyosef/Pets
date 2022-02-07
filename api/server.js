const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

// Database connection
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

// MiddleWare
app.use(express.json()); // body parser
app.use(cors()); // enable cors
app.use("/api", routesUrls); // urls
app.listen(4000, () => console.log("server is running"));
