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

let Ccounter = 0;
let Pcounter = 0;

function declareWinner(){
    if (Ccounter == 5 || Pcounter ==5){
        if(Ccounter==5){
            console.log('Ha ganado la computadora');
            playerCounter.textContent = "Player: 0";
            computerCounter.textContent = "Computer: 0"
        } else {
            console.log('Has ganado');
            playerCounter.textContent = "Player: 0";
            computerCounter.textContent = "Computer: 0"
        }
    }
}

function playRound(playerSelection, computerSelection){
    console.log("Iniciando Ronda");
    computerCounter = document.getElementById("computerCounter");
    playerCounter = document.getElementById("playerCounter");
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        console.log("Empate")
        return 0
    } else {
        switch (playerSelection.toUpperCase()){
            case "ROCK":
                if (computerSelection == "Paper"){
                    console.log("Has perdido. El papel gana a la piedra")
                    Ccounter += 1;
                    computerCounter.textContent = `Computer ${Ccounter}`;
                } else{
                    console.log("Has ganado. La piedra rompe la tijera")
                    Pcounter +=1
                    playerCounter.textContent = `Player: ${Pcounter}`;
                }
                break;
            case "PAPER":
                if (computerSelection == "Scissors"){
                    console.log("Has perdido. La tijera gana al papel")
                    Ccounter += 1;
                    computerCounter.textContent = `Computer ${Ccounter}`;
                } else{
                    console.log("Has ganado. El papel gana a la piedra")
                    Pcounter +=1
                    playerCounter.textContent = `Player: ${Pcounter}`;
                }
                break;
            case "SCISSORS":
                if (computerSelection == "Rock"){
                    console.log("Has perdido. La piedra gana a la tijera")
                    Ccounter += 1;
                    computerCounter.textContent = `Computer ${Ccounter}`;
                } else{
                    console.log("Has ganado. La tijera gana al papel")
                    Pcounter +=1
                    playerCounter.textContent = `Player: ${Pcounter}`;
                    
                }
                break;
        }
    }

    declareWinner();
}

let buttonRock = document.getElementById("RockButton");
let buttonScissors = document.getElementById("ScissorsButton");
let buttonPaper = document.getElementById("PaperButton");
buttonRock.addEventListener("click",function(){playRound('Rock',computerPlay())});
buttonScissors.addEventListener("click",function(){playRound('Scissors',computerPlay())});
buttonPaper.addEventListener("click",function(){playRound('Paper',computerPlay())});

