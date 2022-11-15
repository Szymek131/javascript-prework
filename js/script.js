{
    let paperButton = document.getElementById('play-paper'),
    rockButton = document.getElementById('play-rock'),
    scissorsButton = document.getElementById('play-scissors');

    paperButton.addEventListener('click', paperClicked);
    rockButton.addEventListener('click', rockClicked);
    scissorsButton.addEventListener('click', scissorsClicked);
}