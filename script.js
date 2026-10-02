// create a global variable to store place
let places 

// fetch data and append html when the website first loads
fetch("places.json").then(response => response.json())
    .then(json => {
        console.log(json)
        places = json
        for(let i = 0; i < places.length; i++) {
            let place = places[i]
            displayPlace(place)
        }
    })
    .catch(error => console.log("error", error))


// a function for generating movie card
function displayPlace(place) {
    let generatedSection = document.querySelector('.leftsec');
    if (parent === generatedSection) parent.innerHTML="";
    document.querySelector("#city").textContent = place.city
    document.querySelector("#state").textContent = place.state
    document.querySelector("#country").textContent = place.country
    document.querySelector("#visitReason").textContent = place.purpose
    document.querySelector("#lat").textContent = place.lat
    document.querySelector("#long").textContent = place.long
    let imgGenerate = document.createElement("img");
        imgGenerate.src = place.path;
        document.querySelector("#imgBox").appendChild(imgGenerate);
}

document.querySelector(`[data-city="${city}"]`).addEventListener("click", function(){
    displayPlace(place)
})

// when user clicks a place, run displayPlace for that specific place

// js finds the place and displays <img> within #imgBox, city within #city, state within #state, #latitude, #longitude, and #visitReason

// filter by all, east us, west, us, visiting soon, and favorites

// filter buttons should relate to an if statement (if this radio input showVisitingSoon is checked, show list items with the No property in Visited)
