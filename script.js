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


// a function for generating the stuff on the left side
function displayPlace(place) {
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

// button.addEventListener() for the places buttons to display the content

document.querySelector(".section-grid-places").addEventListener("click", function (event) {
    let button = event.target.closest("button[data-city]")
    let cityName = button.dataset.city
    let selectedPlace = places.find(place => place.city === cityName)

    if (selectedPlace) {
        displayPlace(selectedPlace)
    }
})

// FILTERS

let placeButtons = document.querySelectorAll("button[data-city]")

document.querySelector("#showAll").addEventListener("click", function (event) {
    // make all the place buttons bg color go away before filtering (or in this case, all color)
       console.log(placeButtons)

       placeButtons.forEach(button => {
       button.style.backgroundColor = ""
    })
})

document.querySelector("#showEastUS").addEventListener("click", function (event) {
       placeButtons.forEach(button => {
       button.style.backgroundColor = ""
       })
        for (let i = 0; i < places.length; i++) {
        let place = places[i]
        if (place.eastorwest === "east" && place.country === "USA") {
            let placeButton = document.querySelector(`[data-city="${place.city}"]`)
            if (placeButton){
            placeButton.style.backgroundColor = "#ff9a81"
            }
    }}
})

document.querySelector("#showWestUS").addEventListener("click", function (event) {
       placeButtons.forEach(button => {
       button.style.backgroundColor = ""
       })
        for (let i = 0; i < places.length; i++) {
        let place = places[i]
        if (place.eastorwest === "west" && place.country === "USA") {
            let placeButton = document.querySelector(`[data-city="${place.city}"]`)
            if (placeButton){
            placeButton.style.backgroundColor = "#ff9a81"
            }
    }}
})

document.querySelector("#showVisitingSoon").addEventListener("click", function (event) {
       placeButtons.forEach(button => {
       button.style.backgroundColor = ""
       })
        for (let i = 0; i < places.length; i++) {
        let place = places[i]
        if (place.visited === "No") {
            let placeButton = document.querySelector(`[data-city="${place.city}"]`)
            if (placeButton){
            placeButton.style.backgroundColor = "#ff9a81"
            }
    }}
})

document.querySelector("#showFavorites").addEventListener("click", function (event) {
       placeButtons.forEach(button => {
       button.style.backgroundColor = ""
       })
        for (let i = 0; i < places.length; i++) {
        let place = places[i]
        if (place.favorite === "Y") {
            let placeButton = document.querySelector(`[data-city="${place.city}"]`)
            if (placeButton){
            placeButton.style.backgroundColor = "#ff9a81"
            }
    }}
})

// // ================================================================================================= //

// GOALS NOTES:

// // when user clicks a place, run a displayPlace for that specific place

// // js finds the place and displays <img> within #imgBox, city within #city, state within #state, #latitude, #longitude, and #visitReason

// // filter by all, east us, west, us, visiting soon, and favorites

// // filter buttons should relate to an if statement (if this radio input showVisitingSoon is checked, highlight list items with the property)
