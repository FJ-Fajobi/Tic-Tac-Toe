var aud = document.getElementById('startButto');
var xxL = localStorage.getItem("Player 1");
var xxY = localStorage.getItem("Player 1");
function playMusic() {
    playerOne.innerHTML = xxL;
    playerTwo.innerHTML = xxY;
    aud.play();
    aud.currentTime = 0;
}
function stopMusic() {
    aud.pause();
    aud.currentTime = 0;
}

function startGm() {
    window.location.href = "TicTacToe2.html";
    localStorage.setItem("Player 1", firstPlayer.value);
    localStorage.setItem("Player 2", secondPlayer.value);
}
