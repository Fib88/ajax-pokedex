function getPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon/7/")
        .then(response => response.json())
        .then(data => console.log(data))
}
getPokemon();

 document.getElementById("")
