function start_game(){
    init_div();
    remove_coins();

    z_boost = false;
    boost_count = 3;
    boost_used = 0;
    x_invin = false;
    invin_count = 3;
    invin_used = 0;            

    player = new PlayerCharacter("default", 10, 50, 50, 100);
    ghosts[0] = new ghost("ghost0", 500, 500, ghost_speed, 100);//frequency currently not implemented
    player.loadCharacter();
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