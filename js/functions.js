const rock = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';

const printMessage = function (message){
	const messageWrapper = document.createElement('div');
	messageWrapper.innerHTML = message;
	document.getElementById('messages').appendChild(messageWrapper);
}

const clearMessages = function (){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function (argMoveId) {
    if(argMoveId == 1) {
        return rock;
    } else if(argMoveId == 2) {
        return paper;
    } else if (argMoveId == 3) {
        return scissors;
    }
}

const displayResult = function (argComputerMove, argPlayerMove) {
    printMessage('Zagrałem: ' + argComputerMove + ', a ty ' + argPlayerMove);

    if((argComputerMove == rock && argPlayerMove == paper)||
        (argComputerMove == paper && argPlayerMove == scissors)||
        (argComputerMove == scissors && argPlayerMove == rock)) {
        printMessage('Wygrałeś !');
    } else if(argComputerMove == argPlayerMove) {
        printMessage('Mamy remis :/');
    } else {
        printMessage('Przegrałeś :(');
    }

}

const playGame = function (playerInput){
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    gameScore = displayResult(computerMove, playerMove); 
}