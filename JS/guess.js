
function getScore(x, y, functionString) {

    if (functionString === "BRANIN") {
        var a, b, c, r, s, t;
        a = 1;
        b = 5.1 / (4 * Math.PI * Math.PI);
        c = 5 / Math.PI;
        r = 6;
        s = 10;
        t = 1 / (8*Math.PI);
        return braninFunction(x, y, a, b, c, r, s, t);
    }

    return Math.floor(Math.random() * 100);
}

function braninFunction(x, y, a, b, c, r, s, t) {
    var x1 = (x / canvas.width) * 15 - 5;
    var x2 = (y / canvas.height) * 15;
    var score = a * (x2 - b*x1*x1 + c*x1 - r)^2 + s*(1-t)*Math.cos(x1) + s;

    const MAX_BRANIN_VALUE = 31;

    return Math.floor((score / MAX_BRANIN_VALUE) * 100);
}