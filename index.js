


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
            document.getElementById("pokeweight").innerHTML = "Weight " + data.weight;
            document.getElementById("pokeheight").innerHTML = "Height " + data.height;

            let moveArray = multipleRandom(data.moves);
            displayMoves(moveArray);
        })
}

//make function that gets random moves and pushes it to an empty array
function multipleRandom(moves){
    let moveList = [];
    for(let i=0;i<4;i++){
        let randomMove = Math.floor(Math.random() * (moves.length - 0) + 0);
        moveList.push(moves[randomMove].move.name);
    }
    return moveList;
}

//function that displays moves
function displayMoves(moveshow){
    document.getElementById("moves").innerHTML = moveshow;
}


