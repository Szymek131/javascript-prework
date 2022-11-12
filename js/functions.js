function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
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

function displayResult(argComputerMove, argPlayerMove) {
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