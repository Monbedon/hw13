// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// built in NPM package
var path = require("path");

// tells node creating express server
var app = express();
var PORT = 3000;

// standard code, bodyParser makes it so that the server to interprets the data to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"))

// points server to routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});