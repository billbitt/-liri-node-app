
//get the keys from keys.js
var keys = require("./keys.js");
    //keys.twitterKeys

//get user input
var input = process.argv;
var command = input[2];
var argument = input[3];

//display last 20 tweets
function myTweets(){
    //do stuff
    
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

