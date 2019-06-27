
var clickedPoints;
var mathFunctionString = "BRANIN";
var highScore;

var canvas = document.getElementById('mainGraph');
var ctx = canvas.getContext('2d');

function init() {
    clickedPoints = [];
    mathFunctionString = "BRANIN";
    highScore = 0;

    
    canvas.setAttribute('width', '800');
    canvas.setAttribute('height', '600');

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
        updateCanvas();
        updatePriorGuesses();
    });

    $('#reset').click(function() {
        clickedPoints = [];
        highScore = 0;
        clearGraph();
        updatePriorGuesses();
    })

    $('#contour').click(async function() {
        revealContourLines(); // reveal the contour lines
        await sleep(2000);
        updateCanvas();
    });

}