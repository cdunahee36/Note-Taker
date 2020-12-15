var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//These requires are grabbing the html pages for the server

require("./htmlRoutes")(app);
require("./apiRoutes")(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
