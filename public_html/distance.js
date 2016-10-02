function distance(px, py, gx, gy){
    var dx = px - gx;
    var dy = py - gy;
    var dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    return dist;
}

