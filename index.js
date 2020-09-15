


function getPokemon(){
    const input = document.getElementById("input").value;


    fetch("https://pokeapi.co/api/v2/pokemon/"+input)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let pokeDisplay = document.getElementById("target");
            pokeDisplay.innerHTML = data.name;

            document.getElementById("pokeshow").setAttribute("src", `${data.sprites.front_shiny}`)
            document.getElementById("pokeid").innerHTML = data.id;
            let maxMoves = data.moves.length;
            let randomMove = Math.floor(Math.random()*(maxMoves-1)+1);
            document.getElementById("moveSet").innerHTML = data.moves[randomMove].move.name;
            console.log(data.moves.length);
        })
}


    // function randomMoves(){
    //     let maxMoves = data.moves.length;
    //
    //     let randomMove = Math.floor(Math.random()*(maxMoves - 1)+1)
    //     console.log(randomMove);
    //       return randomMove;
    // }
