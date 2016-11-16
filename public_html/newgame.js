function start_game(){    
    document.addEventListener("keydown", startMoving, false);
    document.addEventListener("keyup", stopMoving, false);
    
    init_div();
    remove_coins();
    if(players[1] !== undefined){
        document.body.removeChild(get(players[1].name));
    }
    for(i=0;i<ghosts.length;i++){
        if(ghosts[i] !== undefined){
            document.body.removeChild(get(ghosts[i].name));
        }
    }

    
<<<<<<< HEAD
    death_penalty = 10;
=======
        
>>>>>>> 04f0cb7bb3a1baddeaace6b5682f374979f11086
    ghosts = [];
    ghost_speed = 2;
    players = [];
    p_index = 0;
    num_ghosts = 1;
    count = 0;
    
    players[p_index] = new PlayerCharacter("teemu", 10, 50, 50, p_index, [37, 38, 39, 40, 90, 88]);
    players[p_index].loadCharacter();
    p_index++;
    if(multip){
        players[p_index] = new PlayerCharacter("p2", 10, 450, 50, p_index, [65, 87, 68, 83, 81, 69]);
        players[p_index].loadCharacter();
        get("score1").style.visibility = "visible";
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
    get("score0").innerHTML = 0;
    get("score1").innerHTML = 0;
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

function reset(){
    clearInterval(zz);
    get("game_text").style.visibility = "visible";
    get("start").style.visibility = "visible";
    get("multip").style.visibility = "visible";
    get("player0").style.visibility = "visible";
    if(multip){
        get("player1").style.visibility = "visible";
    }
    
}