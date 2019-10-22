$(document).ready(function() {

    let theHeroes = ["Iron Man" , "Captain America" , "Spider-Man", "Thor" , "Black Widow" , "The Scarlett Witch" , "Star Lord" , "Black Panther" , "Shuri" , "Okoye"]

    console.log(theHeroes)

    for (let i = 0 ; i < theHeroes.length ; i++ ) {
            // console.log(theHeroes[i])
            let heroes = theHeroes[i]
            iNeedAButton(heroes)
    }

    $(".heroes").on("click" , function() {

        console.log($(this).attr("hero-name"))
        let name = $(this).attr("hero-name")
        getMeTheGifs(name)
    })

    $("#add-hero").on("click", function(){

        userInput = $("#user-hero").val().trim();
        console.log(userInput)
        iNeedAButton(userInput)
        getMeTheGifs(userInput)

    })

    //this function creates the button
    function iNeedAButton(SomeHeroes) {

        let theButton = $("<button>")        
        theButton.addClass("heroes")
        theButton.attr("hero-name" , SomeHeroes )
        theButton.text(SomeHeroes)
        $("#theHeroes").append(theButton)

    }

    function getMeTheGifs(userInput) {

        let query = userInput
        let queryURL = "https://api.giphy.com/v1/gifs/random?q=" + userInput + "&limit=10" + "&api_key=MUy4k5IFeTXQaYMKXy6sCdQsrAx86md2" 

        console.log(queryURL)

    }












}) // document ready end bracket