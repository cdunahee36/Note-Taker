var path = require("path");

//These gets are setting the urls for the server to go to the specific html pages

module.exports = function(app) {
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};