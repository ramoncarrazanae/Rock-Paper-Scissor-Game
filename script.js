function computerPlay(){
    number = Math.floor(Math.random() * 3) + 1;
    switch (number) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        console.log("Empate")
        return 0
    } else {
        switch (playerSelection.toUpperCase()){
            case "ROCK":
                if (computerSelection == "Paper"){
                    console.log("Has perdido. El papel gana a la piedra")
                    return -1
                } else{
                    console.log("Has ganado. La piedra rompe la tijera")
                    return 1
                }
                break;
            case "PAPER":
                if (computerSelection == "Scissors"){
                    console.log("Has perdido. La tijera gana al papel")
                    return -1
                } else{
                    console.log("Has ganado. El papel gana a la piedra")
                    return 1
                }
                break;
            case "SCISSORS":
                if (computerSelection == "Rock"){
                    console.log("Has perdido. La piedra gana a la tijera")
                    return -1
                } else{
                    console.log("Has ganado. La tijera gana al papel")
                    return 1
                }
                break;
        }
    }
}

function game(){
    counter = 0
   for (let i = 1; i<=5; i++){

       let playerSelection = prompt("Entre lo que va a usar:");
       counter += playRound(playerSelection,computerPlay());
   } 

   console.log("Juego terminado")
   if (counter > 0){
       console.log("Has Ganado");
   } else if(counter==0) {
       console.log("Estan empatados");
   } else{
       console.log("Has Perdido");
   }
}

game()