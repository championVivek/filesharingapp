require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  //Database connection
  mongoose.connect("mongodb+srv://vivekNodeJs:12345@cluster0.yfg2i.mongodb.net/filesharingapp?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  const connection = mongoose.connection;

  connection
    .once("open", () => {
      console.log("Database connected.");
    })
    .catch((err) => {
      console.log("Connection failed.");
    });
}

module.exports = connectDB;
