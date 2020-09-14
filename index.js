


function getPokemon(){
    const input = document.getElementById("input").value;


    fetch("https://pokeapi.co/api/v2/pokemon/"+input)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let pokeDisplay = document.getElementById("target");
            pokeDisplay.innerHTML = data.name;


        })
}
getPokemon();



