// create a global variable to store place
let places 

// fetch data and append html when the website first loads
fetch("places.json").then(response => response.json())
    .then(json => {
        console.log(json)
        places = json
        // for(let i = 0; i < places.length; i++) {
        //     let place = places[i]
        //     displayPlace(place)
        // }
        displayPlace(places[0])
    })
    .catch(error => console.log("error", error))


// a function for generating movie card
function displayPlace(place) {
    // let generatedSection = document.querySelector('.leftsec');
    // if (parent === generatedSection) parent.innerHTML="";
    document.querySelector("#city").textContent = place.city
    document.querySelector("#state").textContent = place.state
    document.querySelector("#country").textContent = place.country
    document.querySelector("#visitReason").textContent = place.purpose
    document.querySelector("#lat").textContent = place.lat
    document.querySelector("#long").textContent = place.long
    let imgBox = document.querySelector("#imgBox")
    imgBox.innerHTML = ""
    let imgGenerate = document.createElement("img");
        imgGenerate.src = place.path;
        document.querySelector("#imgBox").appendChild(imgGenerate);
}

// button.addEventListener()

document.querySelector(".section-grid-places").addEventListener("click", function (event) {
    let button = event.target.closest("button[data-city]")
    let cityName = button.dataset.city
    let selectedPlace = places.find(place => place.city === cityName)

    if (selectedPlace) {
        displayPlace(selectedPlace)
    }
})

// document.querySelector("#showAll").addEventListener("click", function (event) {
//     let button = event.target.closest("button[data-city]")
//     let cityName = button.dataset.city
//     let selectedPlace = places.find(place => place.city === cityName)

//     if (selectedPlace) {
//         displayPlace(selectedPlace)
//     }
// })

// // ================================================================================================= //



// function createGenreFilter(genre) {
//     document.querySelector(`[data-genre="${genre}"]`).addEventListener("click", function(event) {
//         let selectedGenreFilter= event.target
//         let selectedGenre = selectedGenreFilter.getAttribute("data-genre")
//         let moviesSection = document.querySelector("#movies")
//         moviesSection.innerHTML = "" // always empty moviesSection before re-generating filtered data
//         let filters = document.querySelectorAll(".filter")
//                 }
            
//         )}
//         // remove and set filter element style
//         styleFilters(filters, selectedGenre)
//     })
// }
// function createRatedFilter(rated) {
//     document.querySelector(`[data-rated="${rated}"]`).addEventListener("click", function() {
//     let moviesSection = document.querySelector("#movies")
//     moviesSection.innerHTML = ""
//     let filteredMovies = movies.filter(movie => movie.rated.toLowerCase() === rated);
//     for(let i = 0; i < filteredMovies.length; i++) {
//         makeMovie(filteredMovies[i])
//     }
//     let filters = document.querySelectorAll(".filter")
//     styleFilters(filters, rated)
// })
// }

// createGenreFilter("drama")
// createGenreFilter("all")
// createGenreFilter("thriller")
// createGenreFilter("animation")
// createGenreFilter("adventure")
// createGenreFilter("fantasy")
// createGenreFilter("sci-fi")
// createGenreFilter("action")
// createGenreFilter("comedy")
// createGenreFilter("romance")
// createRatedFilter("r")
// createRatedFilter("pg")
// createRatedFilter("pg-13")



// // document.querySelector(`[data-city="${city}"]`).addEventListener("click", function(){
// //     displayPlace(place)
// // })

// // when user clicks a place, run displayPlace for that specific place

// // js finds the place and displays <img> within #imgBox, city within #city, state within #state, #latitude, #longitude, and #visitReason

// // filter by all, east us, west, us, visiting soon, and favorites

// // filter buttons should relate to an if statement (if this radio input showVisitingSoon is checked, show list items with the No property in Visited)
