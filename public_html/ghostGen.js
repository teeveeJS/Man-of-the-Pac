function ghostGen(p_arr, ghost_arr){
    ghost_speed++;
    var ghost_name = "ghost" + ghost_arr.length;
    var xy = ghostRandCoord(p_arr);
    ghost_arr[ghost_arr.length] = new ghost(ghost_name, xy[0], xy[1], ghost_speed, 100).loadGhost();
}

function ghostRandCoord(p_arr){
    var ghost_x = Math.floor(Math.random()*450) + 50;
    var ghost_y = Math.floor(Math.random()*450) + 50;
    for(i=0;i<p_arr.length;i++){
        if(distance(p_arr.x, p_arr.y, ghost_x, ghost_y) < 100){
            ghostRandCoord(p_arr);
            break;
        } else {
            return [ghost_x, ghost_y];
        }
    }
}