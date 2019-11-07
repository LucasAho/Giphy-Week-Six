//Giphy category names in the Art and Design GIFs
var topics = ["architecture","cinemagraph", "glitch","loop","mash up","pixel","sculpture","timelapse","typography","cats"];
topics.forEach(function(element){
    btnMaker(element);
});
function btnMaker(element) {
    $("#btnDiv").append("<button class='gifMake' data-cat=" + element + "><span>"+element+"</span></button>");
    
}

function gifMake() {
    var 
}
$(".gifMake").on("click", function() {   
    var artCat = $(this).attr("data-cat");
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artCat + "&api_key=OxxX073XPGULlo72miD7LFTqtLFz13gP&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data;        

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var artImg = $("<img>");
            artImg.attr({
                "src": results[i].images.original_still.url,
                "data-still": results[i].images.original_still.url,
                "data-animate": results[i].images.original.url,
                "data-state": "still",
                "class": "gif"
            });
            gifDiv.append(p);
            gifDiv.append(artImg);
            $("#images").prepend(gifDiv);
            console.log(response);
            
        }
        
        $(".gif").on("click", function(){
            console.log("clicked :D");
            var state = $(this).attr("data-state");
            if(state === "still") {
                var newSrc = $(this).attr("data-animate");
                $(this).attr("src", newSrc);
                console.log("clicked :D");
                $(this).attr("data-state","animate");
                $("#images").prepend(gifDiv);
            } else {
                var newSrc = $(this).attr("data-still");
                $(this).attr("src", newSrc);
                console.log("clicked :D");
                $(this).attr("data-state","still");
                $("#images").prepend(gifDiv);
            }
         });

        
    });

});


$("#userSubmit").on("click", function(){
    var userIn = $("#userInput").val().trim();
    console.log(topics);
    btnMaker(userIn);
});
