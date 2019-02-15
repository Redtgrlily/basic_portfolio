require("dotenv").config();

//reference key file
var keys = require("./keys.js");

//FS
var fs = require("fs");

//Request Pkg
var request = require('request');

//Spotify Pkg install
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});

//Moment Pkg
var moment = require('moment');
moment().format();

var nodeArgs = process.argv;
var userInput = "";
var prettyPrint = "";

for (var i = 3; i < nodeArgs.length; i++) {
    //Convert two separate words to one
    if (i > 3 && i < nodeArgs.length) {
        userInput = userInput + "%20" + nodeArgs[i];
    }
    //else one word
    else {
        userInput += nodeArgs[i];
    }
}

//drop 20 from log
for (var i = 3; i < nodeArgs.length; i++) {
    prettyPrint = userInput.replace(/%20/g, " ");
}

var cmd = process.argv[2];

function liri() {
    switch (cmd) {
        case "concert-this": 
        fs.appendFile('log.txt', prettyPrint + "\n----------------\n", function(err){
            if (err) {
                console.log(err);
            };
        });

        var URL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"
        request(URL, function(err, response, body){
            if (!err && response.statusCode === 200) {

                var data = JSON.parse(body);

                for (var i = 0; i < data.length; i++){
                    console.log("Venue: "+data[i].venue.name);

                    fs.appendFileSync("log.txt", "Venue: "+ data[i].venue.name + "\n", function(err) {
                        if (err) {
                            console.log(err);
                        };
                    });

                    if (data[i].venue.region == "") {
                        console.log("Location: " + data[i].venue.city + ", " + data[i].venue.country);
                        //Append data to log.txt
                        fs.appendFileSync("log.txt", "Location: " + data[i].venue.city + ", " + data[i].venue.country + "\n", function (error) {
                            if (error) {
                                console.log(error);
                            };
                        });
                    } else {
                        console.log("Location: " + data[i].venue.city + ", " + data[i].venue.region + ", " + data[i].venue.country);
                        //Append data to log.txt
                        fs.appendFileSync("log.txt", "Location: " + data[i].venue.city + ", " + data[i].venue.region + ", " + data[i].venue.country + "\n", function (error) {
                            if (error) {
                                console.log(error);
                            };
                        });
                    }

                    var date = data[i].datetime;
                    date = moment(date).format("MM/DD/YYYY");
                    console.log("Date: " + date)
                    //Append data to log.txt
                    fs.appendFileSync("log.txt", "Date: " + date + "\n----------------\n", function (error) {
                            if (error) {
                                        console.log(error);
                                        };
                                    });
                                    console.log("----------------")
                                }
                            }
                        });
                        
                        break;

                        case "spotify-this-song":
                        //If statement for no song provided
                        if (!userInput) {
                            userInput = "The%20Sign";
                            prettyUserInput = userInput.replace(/%20/g, " ");
                        }
                        //Append userInput to log.txt
                        fs.appendFileSync("log.txt", prettyUserInput + "\n----------------\n", function (error) {
                            if (error) {
                                console.log(error);
                            };
                        });
                        spotify.search({
                            type: "track",
                            query: userInput
                        }, function (err, data) {
                            if (err) {
                                console.log("Error occured: " + err)
                            }
                            //Assign data being used to a variable
                            var info = data.tracks.items
                            // console.log(info);
                            //Loop through all the "items" array
                            for (var i = 0; i < info.length; i++) {
                                //Store "album" object to variable
                                var albumObject = info[i].album;
                                var trackName = info[i].name
                                var preview = info[i].preview_url
                                //Store "artists" array to variable
                                var artistsInfo = albumObject.artists
                                //Loop through "artists" array
                                for (var j = 0; j < artistsInfo.length; j++) {
console.log("Artist: " + artistsInfo[j].name)
console.log("Song Name: " + trackName)
console.log("Preview of Song: " + preview)
console.log("Album Name: " + albumObject.name)
console.log("----------------")
//Append data to log.txt
fs.appendFileSync("log.txt", "Artist: " + artistsInfo[j].name + "\nSong Name: " + trackName + "\nPreview of Song: " + preview + "\nAlbum Name: " + albumObject.name + "\n----------------\n", function (error) {
    if (error) {
        console.log(error);
    };
});
}
}
})
break;
                }
            }
        })
    }
}




function switchCase() {

    switch (action) {
  
      case 'concert-this':
        concertThis(parameter);                   
        break;                          
  
      case 'spotify-this-song':
        spotSong(parameter);
        break;
  
      case 'movie-this':
        movieInfo(parameter);
        break;
  
      case 'do-what-it-says':
        getRandom();
        break;
  
        default:                            
        logIt("Invalid Instruction");
        break;
  
    }
  };

  function concertThis(parameter){
    if(action === 'concert-this') {

    }
  }


// Do What It Says function, uses the reads and writes module to access the random.txt file and do what's written in it
// function doWhatItSays() {
//     fs.readFile("random.txt", "utf8", function(error, data){
//         if (!error) {
//             doWhatItSaysResults = data.split(",");
//             spotifyThisSong(doWhatItSaysResults[0], doWhatItSaysResults[1]);
//         } else {
//             console.log("Error occurred" + error);
//         }
//     });
// };
// // Do What It Says function, uses the reads and writes module to access the log.txt file and write everything that returns in terminal in the log.txt file
// function log(logResults) {
//   fs.appendFile("log.txt", logResults, (error) => {
//     if(error) {
//       throw error;
//     }
//   });
// }