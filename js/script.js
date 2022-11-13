let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = 'nieznany ruch';
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = 'nieznany ruch';
let gameScore = 'nierostrzygnięty'



playerMove = getMoveName(playerInput);
computerMove = getMoveName(randomNumber);
gameScore = displayResult(computerMove, playerMove);