$(document).ready(function() {

    let theHeroes = ["Iron Man" , "Captain America" , "Spider-Man", "Thor" , "Black Widow" , "Scarlet Witch" , "Star Lord" , "Black Panther" , "Shuri" , "Okoye"]
    

     for (let i = 0 ; i < theHeroes.length ; i++ ) {
        // console.log(theHeroes[i])
        let heroes = theHeroes[i]

        iNeedAButton(heroes)

     }

    $("#tryAgain").hide()
    $("#giffy").hide()

    $("#add-hero").on("click", function(event){
    
        event.preventDefault()
        $("theClear").empty()
        

        userInput = $("#user-hero").val().trim()
        // const miniHeroes = theHeroes.map(function(hero) {
        //     return hero.toLowerCase();
        // })
        // if (miniHeroes.includes(userInput.toLowerCase())) {
        //     console.log("this already exists")
        // }
        if (theHeroes.find(function(hero) {
            return hero.toLowerCase() === userInput.toLowerCase()
        })) {
            console.log("this already exists")
            $("#tryAgain").show().text("Try again - this button already exists")
        } else if (userInput === ""){
            $("#tryAgain").show().text("No text provided - please enter an Avengers' name")
        } else {
            $("#tryAgain").hide()
            theHeroes.push(userInput)
            console.log(userInput)
            console.log(theHeroes)
            iNeedAButton(userInput)
        }       
        
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

        $("#giffy").show()    
        $("#theGifs").empty()    
       
        let query = userInput.trim()
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + query + "&limit=10" + "&api_key=MUy4k5IFeTXQaYMKXy6sCdQsrAx86md2" 

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){            

            let results = response.data

            console.log(results)

            for (let i = 0 ; i < results.length ;i++ ) {
                
                let theDiv = $("<div>").addClass("theTile")
                let ratings = results[i].rating

                let PTag = $("<p>").text(`Rating: ${ratings}`)
                
                // let URL = results[i].images.original_still.url
                let theAnimate = results[i].images.downsized.url
                let theStill = results[i].images.downsized_still.url

                let theGif = $("<img>")
                            .addClass("hero-gif")
                            .attr("src" , theStill)
                            .attr("data-animate" , theAnimate)
                            .attr("width", 200)                            
                            .attr("data-still" , theStill)      
                            .attr("data-state" , "still")
                
                theDiv.prepend(PTag)
                theDiv.prepend(theGif)
                

                $("#theGifs").prepend(theDiv)

                console.log(theGif)
            }

        })

    }

    $(document).on("click", ".hero-gif" , function(){

        let state = $(this).attr("data-state")

        if (state === "still") {
            $(this).attr("src" , $(this).attr("data-animate"))
            $(this).attr("data-state" , "animate")
        } else {
            $(this).attr("src" , $(this).attr("data-still"))
            $(this).attr("data-state" , "still")
        }
        
    })


    $(document.body).on("click", ".heroes", function() {

        console.log($(this).attr("hero-name"))
        let name = $(this).attr("hero-name")
        getMeTheGifs(name)
  
      });


}) // document ready end bracket