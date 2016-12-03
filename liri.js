
//get the keys from keys.js
var keys = require("./keys.js");
var twitter = require("twitter");
var client = new twitter(keys.twitterKeys);

//spotify
var spotify = require("spotify");

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
        //check for error
        if(error) {
            console.log("An error occurred finding your tweets.");
            console.log("error: " + error);
            return;
        };
        //display the tweets 
        for (var i = 0; i < tweets.length; i++){
            console.log("tweet #" + (i + 1));
            console.log(tweets[i].text);
            console.log("");
        };
    });
};

//get song information from spotify
function spotifySong(songName){
    //log a blank space
    console.log("");
    //display the song information
    spotify.search({ type: 'track', query: songName }, function(error, response) {
        //check for error
        if (error) {
            console.log("An error occurred finding your song.");
            console.log("error: " + error);
            return;
        }
        //console.log(response.tracks.items[0]);
        //display Artist(s)
        console.log("Artist: " + response.tracks.items[0].artists[0].name); //note this shoudl print all in the artists array
        //display the song's name
        console.log("Song Name: " + response.tracks.items[0].name);
        //display a preview link of the song from Spotify
        console.log("Preview URL: " + response.tracks.items[0].preview_url);
        //display the album that the song is from
        console.log("Album: " + response.tracks.items[0].album.name);
    });
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

