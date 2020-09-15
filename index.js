


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
            randomMove = (Math.floor(Math.random(1)-data.moves)+data.moves)
            console.log(randomMove)
            document.getElementById("moveSet").innerHTML = data.moves[1].move.name;
        })
}



// const random = (Math.floor(Math.random(0)-pokeMoves.length)+pokeMoves.length)
//
// for ( let i=0;i==pokeMoves.length; i++){
//         console.log(random);
// }

