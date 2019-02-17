var express = require("express");
 var favicon = require('serve-favicon')
 var path = require('path')



var PORT = process.env.PORT || 8080;
var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function () {
  console.log("Listening on port:%s", PORT);
});
