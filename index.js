function start(){



    function retrievePokémon() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1050")
            .then(response => response.json())
            .then (function(allpokemon){
            allpokemon.results.forEach(function(pokemon){
                fetchPokemonData(pokemon);
            })
        })

    }
    retrievePokémon();
}
function fetchPokemonData() {
    let url = "https://pokeapi.co/api/v2/pokemon/1/";
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then(response => response.json())
        .then(function(pokeData){
            console.log(pokeData)
        })
}

function renderPokemon(pokedata){
    let allPokemonContainer = document.getElementById("poke-container");
    let pokeContainer = document.createElement("div");
    let pokeName = document.createElement('h4');
    pokeName.innerText = pokeData.name;
    let pokeNumber = document.createElement('p')
}
start()