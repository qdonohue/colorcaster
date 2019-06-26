
const POINT_RADIUS = 10;
// updates the canvas, drawing points of the appropriate color
function updateCanvas() {
    clearGraph();

    updatePoints();
}

function updatePoints() {
    for (var i = 0; i < clickedPoints.length; i++) {
        var cur = clickedPoints[i];
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, POINT_RADIUS, 0, 2*Math.PI);
        ctx.fillStyle = cur.color;
        ctx.fill();
    }
}


function clearGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateHighScore() {
    var score = $('#bestScore')
    score.html(highScore);
}

// function that will reveal all the contour lines across the board
function revealContourLines() {
    clearGraph();

    for (var x = 0; x < canvas.width; x += 20) {
        for (var y = 0; y < canvas.height; y+= 20) {
            ctx.beginPath();
            ctx.arc(x, y, POINT_RADIUS, 0, 2*Math.PI);
            ctx.fillStyle = getColorFromScore(getScore(x, y, mathFunctionString));
            ctx.fill();
        }
    }

}