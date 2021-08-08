const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.static("public"));
app.use(express.json());
connectDB();

//template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
