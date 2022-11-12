let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'nieznany ruch';
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = 'nieznany ruch';
let gameScore = 'nierostrzygnięty'

if (randomNumber == '1') {
    computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

if (playerInput == randomNumber) {
    gameScore = 'Mamy remis !!!'
} else if(playerInput == 1 && randomNumber == 3) {
    gameScore = 'Kamień bije nożyce ! Wygrałeś !';
} else if(playerInput == 2 && randomNumber == 1) {
    gameScore = 'Papier bije kamień ! Wygrałeś !';
} else if(playerInput == 3 && randomNumber == 2) {
    gameScore = 'nożyce biją papier ! Wygrałeś !';
} else if(randomNumber == 1 && playerInput == 3) {
    gameScore = 'Kamień bije nożyce ! Wygrałem!';
} else if(randomNumber == 2 && playerInput == 1) {
    gameScore = 'Papier bije kamień ! Wygrałem !';
} else if(randomNumber == 3 && playerInput == 2) {
    gameScore = 'nożyce biją papier ! Wygrałem !';
} else {
    gameScore = 'Ups... nie działa, czy wybrałeś liczbę z zakresu 1-3 ?';
}

printMessage(gameScore);
