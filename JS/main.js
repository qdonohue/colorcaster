
var clickedPoints;
var mathFunctionString;

var canvas = document.getElementById('mainGraph');
var ctx = canvas.getContext('2d');

function init() {
    clickedPoints = [];
    mathFunctionString = "TEST_RIGHT_NOW";

    
    canvas.setAttribute('width', '800');
    canvas.setAttribute('height', '600');

    canvas.addEventListener('click', function(event) { // When you click on a point, add point there
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        var point = {};
        point.x = x;
        point.y = y;
        point.score = getScore(mathFunctionString);
        point.color = getColorFromScore(point.score);

        clickedPoints.push(point);
        updateCanvas();
    });

    $('#reset').click(function() {
        clickedPoints = [];
        clearGraph();
    })

}