function start_game(){    
    document.addEventListener("keydown", startMoving, false);
    document.addEventListener("keyup", stopMoving, false);
    
    init_div();
    remove_coins();
    if(players[1] !== undefined){
        document.body.removeChild(get(players[1].name));
    }    
    
    ghosts = [];
    players = [];

    players[0] = new PlayerCharacter("teemu", 10, 50, 50, [37, 38, 39, 40, 90, 88]);
    players[0].loadCharacter();
    if(multip){
        players[1] = new PlayerCharacter("p2", 10, 450, 50, [65, 87, 68, 83, 81, 69]);
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
    get("multip").style.visibility = "hidden";
    get("game_text").style.visibility = "hidden";
    get("player0").style.visibility = "hidden";
    get("player1").style.visibility = "hidden";
    get("score").innerHTML = 0;
    get("time").innerHTML = null;
    for(i=0;i<players.length;i++){
        get("t_coin"+i).innerHTML = null;
        get("t_time"+i).innerHTML = null;
        get("t_pps"+i).innerHTML = null;
        get("t_boost"+i).innerHTML = null;
        get("t_invin"+i).innerHTML = null;
        get("t_dist"+i).innerHTML = null;
        get("t_total"+i).innerHTML = null;
    }
    
}

function remove_coins(){
    for (h = 1; h <= size; h++) {
        for (i = 1; i <= size; i++) {
            var divID = String(h) + String(i);
            get(divID).innerHTML = null;
        }
    }
}