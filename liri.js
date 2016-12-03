
//twitter
var keys = require("./keys.js");
var twitter = require("twitter");
var client = new twitter(keys.twitterKeys);
//spotify
var spotify = require("spotify");
//OMDB + request 
var request = require("request");

//get user input
var input = process.argv;
var command = input[2];
if (!!input[3]){  //if a fourth argument is passed, store it
    var argumentString = input[3];
} else {
    var argumentString = ""; //if a fourth element is not passed, fill the argument variable with a blank string 
};
for (var i = 4; i < input.length; i++){  //make one string of all extra arguments in case the song or movie is more than one word
    argumentString = argumentString + " " + input[i];
    console.log(argumentString);
};

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
    console.log(movieName);
    //check to see if a movieName was entered
    if (movieName === ""){
        movieName = "Mr. Nobody"; //is it ok to have blank spaces in the movie name?
    };

    //create the request URL
    var queryURL = "http://omdbapi.com/?t=" + movieName + "&tomatoes=true" + "&r=json";
    //make the request
    request(queryURL, function(error, response, body){  
        if (error) {
            console.log("An error occured finding your movie.");
            console.log("error: " + error);
            return
        };

        if (response.statusCode !== 200) {
            console.log("Something went wrong. StatusCode: " + response.statusCode);
        };

        var result = JSON.parse(body);
        //console.log(result);
        //log a blank space
        console.log("");
        //Title of the movie.
        console.log("Title: " + result.Title);
        //Year the movie came out.
        console.log("Year: " + result.Year);
        //IMDB Rating of the movie.
        console.log("IMDB Rating: " + result.imdbRating);
        //Country where the movie was produced.
        console.log("Country of Production: " + result.Country);
        //Language of the movie.
        console.log("Language: " + result.Language);
        //Plot of the movie.
        console.log("Plot Summary: " + result.Plot);
        //Actors in the movie.
        console.log("Actors: " + result.Actors);
        //Rotten Tomatoes Rating.
        console.log("Rotten Tomatoes Rating: " + result.tomatoRating);
        //Rotten Tomatoes URL.
        console.log("Rotten Tomatoes URL: " + result.tomatoURL);
    });
};

//run the text file
function doWhatItSays(){
    
};

//process input 
if (command === "my-tweets"){
    myTweets();
} else if (command === "spotify-this-song"){
    spotifySong(argumentString);
} else if (command === "movie-this"){
    movieThis(argumentString);
} else if (command === "do-what-it-says"){
    doWhatItSays();
};