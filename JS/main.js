
var clickedPoints;
var mathFunctionString = "BRANIN";
var GUESS_NUMBER = 10;
var highScore;

var canvas = document.getElementById('mainGraph');
var ctx = canvas.getContext('2d');

function init() {
    clickedPoints = [];
    mathFunctionString = "BRANIN";
    highScore = 0;

    
    canvas.setAttribute('width', '800');
    canvas.setAttribute('height', '600');

    $('remainingGuess').html(GUESS_NUMBER) // set initial guess coun

    canvas.addEventListener('click', function(event) { // When you click on a point, add point there
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        var point = {};
        point.x = x;
        point.y = y;
        point.score = getScore(x, y, mathFunctionString);
        point.color = getColorFromScore(point.score);

        if (point.score > highScore) {
            highScore = point.score;
            updateHighScore();
        }

        clickedPoints.push(point);
        if (clickedPoints.length == GUESS_NUMBER) {
            gameOverHandler();
            return
        }
        $('#remainingGuess').html(GUESS_NUMBER - clickedPoints.length)
        updateCanvas();
        updatePriorGuesses();
    });

    $('#reset').click(function() {
        clickedPoints = [];
        highScore = 0;
        clearGraph();
        updateHighScore();
        updatePriorGuesses();
    })

    $('#contour').click(async function() {
        revealContourLines(); // reveal the contour lines
        await sleep(2000);
        updateCanvas();
    });

}
