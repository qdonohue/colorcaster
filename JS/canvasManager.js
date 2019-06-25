
const POINT_RADIUS = 5;
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