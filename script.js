let places 

// fetch data and append html when the website first loads
fetch("places.json").then(response => response.json())
    .then(json => {
        console.log(json)
        places = json
        for(let i = 0; i < places.length; i++) {
            let place = places[i]
            makeMovie(movie)
        }
    })
    .catch(error => console.log("error", error))