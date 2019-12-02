//Hides border around GIFs until generated
$("#images").hide();

//Giphy category names in the Art and Design GIFs
var topics = ["architecture","cinemagraph", "glitch","loop","mash up","pixel","sculpture","timelapse","typography"];

function gifMake() {
    var artCat = $(this).attr("data-cat");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artCat + "&api_key=OxxX073XPGULlo72miD7LFTqtLFz13gP&limit=10"; 

// $(".gifMake").on("click", function() {   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data;        
        //Loops through results
        for (var i = 0; i < results.length; i++) {
            //Creating divs to hold gifs and their attributes
            var gifDiv = $("<div>");
            //Storing rating data
            var ratingRaw = results[i].rating;
            var rating = ratingRaw.toUpperCase();
            

            //Creating element to hold rating
            var p = $("<p>").text("Rating: " + rating);
            //Creating element to hold gif
            var artImg = $("<img>");
            //Giving pause/play functionality to gifs
            artImg.attr({
                "src": results[i].images.original_still.url,
                "data-still": results[i].images.original_still.url,
                "data-animate": results[i].images.original.url,
                "data-state": "still",
                "class": "gif"
            });
            //Updating html to variables            
            gifDiv.append(artImg);
            gifDiv.append(p);
            $("#images").show();
            $("#images").prepend(gifDiv);           
            
        }
        //Pause/Play functionality with gif click.
        $(".gif").on("click", function(){
            //Adding an on/off style var
            var state = $(this).attr("data-state");
            //Still is the initial state of the gifs
            if(state === "still") {
                //Var holds new img src
                var newSrc = $(this).attr("data-animate");
                //The gif's src and data-state attributes are modified
                $(this).attr("src", newSrc);
                $(this).attr("data-state","animate");
                //New content updated to HTML
                $("#images").prepend(gifDiv);
            } else {
                var newSrc = $(this).attr("data-still");
                $(this).attr("src", newSrc);
                $(this).attr("data-state","still");
                $("#images").prepend(gifDiv);
            }
        });
    });
    
}
//Displays buttons for each topic
function btnRender(){
    $("#btnDiv").empty();

    //Loops through topics array
    topics.forEach(function(element){
    var upperEl = element.charAt(0).toUpperCase() + element.slice(1);
    //Creates button named for and valued by the topics array
        $("#btnDiv").append("<button class='gifMake' data-cat=" + element + "><span>"+ upperEl +"</span></button>");

    });
}

//Function runs when user inputs their own topic
$("#userSubmit").on("click", function(event){
    //Prevents default submit
    event.preventDefault();
    //Sets var to hold the user's input
    var userRaw = $("#userInput").val().trim();

    if (userRaw.length === 0) {
        $("#userInput").attr("placeholder", "Please enter a category")
    } else {
        $("#userInput").attr("placeholder", "New Category")
        //Adds user input to topic array
        topics.push(userRaw);
        //Calls function to rerender updated buttons
        btnRender();
    }
});

$("#clearBtn").on("click", function(){
    $("#images").empty()
});


$(document).on("click", ".gifMake", gifMake);
btnRender();
