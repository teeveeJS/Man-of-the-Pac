function ghostGen(p, ghost_arr){
    ghost_speed++;
    var ghost_name = "ghost" + ghost_arr.length;
    var ghost_x = (parseInt(p.x) > 280) ? 100 : 500;
    var ghost_y = (parseInt(p.y) > 280) ? 100 : 500;
    ghost_arr[ghost_arr.length] = new ghost(ghost_name, ghost_x, ghost_y, ghost_speed, 100).loadGhost();
}

