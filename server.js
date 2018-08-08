// ================================================================================
// DEPENDENCIES AND EXPRESS
// ================================================================================
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8082;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('app'));
// ================================================================================
// ROUTER
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.get(function (request, response) {
//   switch (request.url) {
//       case "/style.css" :
//           response.writeHead(200, {"Content-Type": "text/css"});
//           response.write(cssFile);
//           break;
//       default :    
//           response.writeHead(200, {"Content-Type": "text/html"});
//           response.write(htmlFile);
//   });
//   response.end();
// }

// app.get("/style", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/style.css"));
// });

// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
