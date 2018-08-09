// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/friendsurvey.html"));
  });

  app.get("/fronds", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/frondsurvey.html"));
  });

//   app.get("/reserve", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/reserve.html"));
//   });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
