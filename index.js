


function getPokemon(){
    const input = document.getElementById("input").value;

    //fetch api data based on input
    fetch("https://pokeapi.co/api/v2/pokemon/"+input)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let pokeDisplay = document.getElementById("target");
            pokeDisplay.innerHTML = data.name;

            //log sprites and id to DOM
            document.getElementById("pokeshow").setAttribute("src", `${data.sprites.front_shiny}`)
            document.getElementById("pokeid").innerHTML = data.id;


            //log randomised moveset to DOM
            let maxMoves = data.moves.length;
            let randomMove = Math.floor(Math.random()*(maxMoves-1)+1);
            document.getElementById("moveSet").innerHTML += " "+ (data.moves[randomMove].move.name)

            console.log(data.moves.length);
        })
}

function multipleRandom(){
    let moveList = ""
    for(let i=0;i<4;i++){
        document.getElementById("moveSet").innerHTML = (data.moves[randomMove].move.name)
        
    }
}
