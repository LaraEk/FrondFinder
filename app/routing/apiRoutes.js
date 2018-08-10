// I am going to add Path just in case I need to require dependencies.
var path = require("path");

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var frondData = require("../data/fronds");
var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/fronds", function(req, res) {
    res.json(frondData);
  });

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  // NOTE: THIS WILL PUSH FRIEND INFO TO FRIENDS.  YOU NEED ANOTHER ONE TO GET STUFF FROM FRONDSDB
  app.post("/api/friends", function(req, res) {
    // friendData.push(req.body);
    // res.json(true);

    var newUserScores = req.body.scores;

    var matchname = "";
    var matchpic = "";
    var totaldifference = 1000; // this is what we're comparing the difference to. not sure why so high.

    for (var i = 0; i < friendData.length; i++) {

      var difference = 0;
      for (var z = 0; z < newUserScores.length; z++) {
        difference += Math.abs(friendData[i].scores[z] - newUserScores[z]);
      }

      if (difference < totaldifference) {
        console.log('Closest match found = ' + difference);
				console.log('Friendname = ' + friendData[i].name);
				console.log('Friendpic = ' + friendData[i].pic);

        totaldifference = difference;
        matchname = friendData[i].name;
        matchpic = friendData[i].pic;
      }
    }

  friendData.push(req.body);
  res.json({status: "pushed", matchname: matchname, matchpic: matchpic});

  });


  app.post("/api/fronds", function(req, res) {

    var newPlantScores = req.body.scores;

    var matchplantname = "";
    var matchplantpic = "";
    var totaldifference = 1000; // this is what we're comparing the difference to. not sure why so high.

    for (var i = 0; i < frondData.length; i++) {

      var difference = 0;
      for (var z = 0; z < newPlantScores.length; z++) {
        difference += Math.abs(frondData[i].scores[z] - newPlantScores[z]);
      }

      if (difference < totaldifference) {
        console.log('Closest match found = ' + difference);
				console.log('Plantname = ' + frondData[i].name);
				console.log('Plantpic = ' + frondData[i].pic);

        totaldifference = difference;
        matchplantname = frondData[i].name;
        matchplantpic = frondData[i].pic;
      }
    }

  frondData.push(req.body);
  res.json({status: "pushed", matchplantname: matchplantname, matchplantpic: matchplantpic});

  });

};




  //   app.post("/api/fronds", function(req, res) {
  //     // connection.query from mysql -- look for that
  //     // --------------------------------------------------
  //   // I WANT TO MAKE "fronds" post from a database
  //   // think about this after you get "friends" working
  //   // --------------------------------------------------
  // });



    // // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // // It will do this by sending out the value "true" have a table
    // // req.body is available since we're using the body-parser middleware
    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // ---------------------------------------------------------------------------
  // ------- COMMENTING THIS OUT BECAUSE I WANT TO RETAIN DATA ACROSS USES ------- //
  // ---------------------------------------------------------------------------

  //   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];

//     console.log(tableData);
//   });
