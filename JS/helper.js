
function getHTMLelement(point) {
    div = document.createElement("div");
    div.className = "priorGuess";

    div.style.backgroundcolor = point.color;

    location = document.createElement('div');
    location.className = "location";
    location.html = "(" + point.x + ", " + point.y + ")";

    div.appendChild(location);

    score = document.createElement('div');
    score.className = "score";
    score.html = point.score;

    return div;
}


function hsl_col_perc(percent, start, end) {
    var a = percent / 100,
        b = (end - start) * a,
        c = b + start;
  
    // Return a CSS HSL string
    return 'hsl('+c+', 100%, 50%)';
}

function getColorFromScore(score) {
    const RED = 0,
    GREEN = 120;
    return hsl_col_perc(score, RED, GREEN);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }