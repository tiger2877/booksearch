    
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// // Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/mongoScraper", { useNewUrlParser: true });
// Using es6 js promise
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

var db = mongoose.connection;

// if any errors than console errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// display a console message when mongoose has a connection to the db
db.once("open", function () {
  console.log("Mongoose connection successful.");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});