
function gameOverHandler() {
    var canvas = document.getElementById('mainGraph');
    canvas.style.display = "none"

    var gameOver = $('#gameOver')
    gameOver.css('display', 'flex')

    endGameString = "GAME OVER: High score achieved of " + highScore + ". Reload the page to play again"
    gameOver.html(endGameString)

}