function startMoving(e){
    var k = e.keyCode;
    map[k] = e.type === "keydown";
    //allows for multiple key presses
    for(i=0;i<players.length;i++){
        if(players[i].isAlive){
            players[i].isKeyDown = true;
        }
    }
}

function stopMoving(e){
    var k = e.keyCode;
    map[k] = e.type === "keydown";
    for(i=0;i<players.length;i++){
        if(map[players[i].controls[4]] || map[players[i].controls[5]]){
            players[i].isKeyDown = false;
        }
    }
};