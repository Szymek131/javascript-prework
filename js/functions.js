const printMessage = function (msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function (){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function (argMoveId) {
    if(argMoveId == 1) {
        return 'kamień';
    } else if(argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

const displayResult = function (argComputerMove, argPlayerMove) {
    printMessage('Zagrałem: ' + argComputerMove + ', a ty ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Papier bije kamień! Wygrałeś!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Papier bije kamień! Tym razem ja wygrałem!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Nożyce biją papier! Udało ci się wygrać!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Nożyce biją papier! Komputer górą!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('kamień bije nożyce! Wygrałeś... masz szczęście!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('kamień bije nożyce! Udało mi się wygrać!');
    }  else if((argComputerMove == 'kamień' && argPlayerMove == 'kamień') || (argComputerMove == 'papier' && argPlayerMove == 'papier') || (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')) {
        printMessage('Mamy remis !');
    }  else {
        printMessage('Ups... nie działa, czy wybrałeś liczbę z zakresu 1-3 ?');
    }
}

const playGame = function (playerInput){
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = 'nieznany ruch',
        playerMove = 'nieznany ruch',
        gameScore = 'nierostrzygnięty';


    clearMessages();
    playerMove = getMoveName(playerInput);
    computerMove = getMoveName(randomNumber);
    gameScore = displayResult(computerMove, playerMove); 
}

const rockClicked = function (){
    playGame(1);
}
  
const paperClicked = function (){
    playGame(2);
}
const scissorsClicked = function (){
    playGame(3);
}