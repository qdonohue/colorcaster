
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