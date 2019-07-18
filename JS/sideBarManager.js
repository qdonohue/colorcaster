

function updatePriorGuesses() {
    $('#priorGuesses').empty();

    for (var i = clickedPoints.length - 1; i > -1; i--) {
        var cur = clickedPoints[i];

        //var htmlElement = getHTMLelement(cur, i);
        var htmlElement = getHTMLelementText(cur, i);
        $('#priorGuesses').append(htmlElement);
        var id = "#li" + i;
        $(id).css('background-color', cur.color);
    }

}

function getHTMLelementText(point, id) {
    idString = "li" + id;

    stringFormatted = "<li class='priorGuess' id='" +idString + "'><div class='location'>(" + Math.round(point.x) + ", " + Math.round(point.y) + ")" + "</div><div class='score'>   " + point.score + "</div></li>"

    return stringFormatted
}


function getHTMLelement(point) {
    parent = document.createElement("li");
    parent.className = "priorGuess";

    location = document.createElement('div');
    location.className = "location";
    location.html = "(" + point.x + ", " + point.y + ")";

    parent.appendChild(location);

    score = document.createElement('div');
    score.className = "score";
    score.html = point.score;
    score.style.color = point.color;

    parent.appendChild(score);

    return parent;
}