var notes = require("../db/db.json");
var fs = require("fs");

module.exports = function(app) {
  
  app.get("/api/notes", function(req, res) {
    res.json(notes);
  });
  
};

fs.appendFile(notes)
