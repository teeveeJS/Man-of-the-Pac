function startMoving(e){
    var k = e.keyCode;
    map[k] = e.type === "keydown";
    //allows for multiple key presses
    for(i=0;i<players.length;i++){
        if(players[i].isAlive && map[players[i].controls[0]] || map[players[i].controls[1]] || map[players[i].controls[2]] || map[players[i].controls[3]] || map[players[i].controls[4]] || map[players[i].controls[5]]){
            players[i].isKeyDown = true;
            /*
            for(n in map){
                console.log(n + " " + map[n]);
            }*/
        }
    }
}

function stopMoving(e){
    var k = e.keyCode;
    map[k] = e.type === "keydown";
    for(i=0;i<players.length;i++){
        if(map[players[i].controls[4]] || map[players[i].controls[5]]){
            players[i].isKeyDown = false;
            //console.log(i + " unpressed");
        }
    }
};