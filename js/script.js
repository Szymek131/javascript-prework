{
    const rockButton = document.getElementById('play-rock');
    const paperButton = document.getElementById('play-paper');
    const scissorsButton = document.getElementById('play-scissors');

    rockButton.addEventListener('click', function(){
        playGame(1);
    });
    paperButton.addEventListener('click', function(){
        playGame(2);
    });
    scissorsButton.addEventListener('click', function(){
        playGame(3);
    });
}