function distance(player, ghost){
    var dx = player.x - ghost.x;
    var dy = player.y - ghost.y;
    var dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    return dist;
}

