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
            var rating = results[i].rating;
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
            gifDiv.append(p);
            gifDiv.append(artImg);
            $("#images").prepend(gifDiv);           
            
        }
        //Pause/Play functionality with gif click.
        $(".gif").on("click", function(){
            var state = $(this).attr("data-state");
            if(state === "still") {
                var newSrc = $(this).attr("data-animate");
                $(this).attr("src", newSrc);
                $(this).attr("data-state","animate");
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
    //Creates button named for and valued by the topics array
        $("#btnDiv").append("<button class='gifMake' data-cat=" + element + "><span>"+element+"</span></button>");

    });
}


$("#userSubmit").on("click", function(event){
    event.preventDefault();

    var artCat = $("#userInput").val().trim();

    topics.push(artCat);

    btnRender();
});
$(document).on("click", ".gifMake", gifMake);
btnRender();
