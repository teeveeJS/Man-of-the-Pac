function start_game(){    
    document.addEventListener("keydown", startMoving, false);
    document.addEventListener("keyup", stopMoving, false);
    
    init_div();
    remove_coins();
    
    ghosts = [];

    players[0] = new PlayerCharacter("teemu", 10, 50, 50, 100, [37, 38, 39, 40, 90, 88]);
    players[0].loadCharacter();
    if(multip){
        players[1] = new PlayerCharacter("p2", 10, 450, 50, 100, [65, 87, 68, 83, 81, 69]);
        players[1].loadCharacter();
    }
    ghosts[0] = new ghost("ghost0", 500, 500, ghost_speed, 100);//frequency currently not implemented
    ghosts[0].loadGhost();
    clock.start();
    zz = setInterval(update, speed);
    updatePowers();
}

function init_div(){
    get("start").style.visibility = "hidden";
    get("game_text").style.visibility = "hidden";
    get("score").innerHTML = 0;
    get("time").innerHTML = null;
    get("t_coin").innerHTML = null;
    get("t_time").innerHTML = null;
    get("t_pps").innerHTML = null;
    get("t_boost").innerHTML = null;
    get("t_invin").innerHTML = null;
    get("t_dist").innerHTML = null;
}

function remove_coins(){
    for (h = 1; h <= size; h++) {
        for (i = 1; i <= size; i++) {
            var divID = String(h) + String(i);
            get(divID).innerHTML = null;
        }
    }
}