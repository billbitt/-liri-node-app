
//get the keys from keys.js
var keys = require("./keys.js");
var twitter = require("twitter");
var client = new twitter(keys.twitterKeys);

//get user input
var input = process.argv;
var command = input[2];
var argument = input[3];

//display last 20 tweets
function myTweets(){
    //log a blank space
    console.log("");
    //log all the tweets
    client.get('statuses/user_timeline', {count: "20"}, function(error, tweets, response) {
        if(error) {
            return console.log("an error occurred finding your tweets");
        } else {
            //console.log(tweets);  // The favorites. 
            for (var i = 0; i < tweets.length; i++){
                console.log("tweet #" + (i + 1));
                console.log(tweets[i].text);
                console.log("");
            };
            //console.log(response);  // Raw response object. 
        };
    });

};

//get song information from spotify
function spotifySong(songName){
    //do stuff
};

//get song information from OMDB
function movieThis(movieName){

};

//run the text file
function doWhatItSays(){

};

//process input 
if (command === "my-tweets"){
    myTweets();
} else if (command === "spotify-this-song"){
    spotifySong(argument);
} else if (command === "movie-this"){
    movieThis(argument);
} else if (command === "do-what-it-says"){
    doWhatItSays();
}

