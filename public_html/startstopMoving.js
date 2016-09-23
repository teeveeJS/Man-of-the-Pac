function startMoving(e){
    var k = e.keyCode;
    map[k] = e.type === "keydown";
    //allows for multiple key presses
    if(player.isAlive){
        isKeyDown = true;
    }
}

function stopMoving(e){
    var k = e.keyCode;
    map[k] = e.type === "keydown";
    if(map[90] || map[88]){
        isKeyDown = false;
    }
};