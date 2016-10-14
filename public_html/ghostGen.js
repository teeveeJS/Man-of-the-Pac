function ghostGen(p_arr){
    ghost_speed++;
    num_ghosts++;
    var ghost_name = "ghost" + num_ghosts.toString();
    var xy = ghostRandCoord(p_arr);
    ghosts[num_ghosts-1] = new ghost(ghost_name, xy[0], xy[1], ghost_speed, 100);
    ghosts[num_ghosts-1].loadGhost();
    return ghosts;
}

function ghostRandCoord(p_arr){
    var ghost_x = Math.floor(Math.random()*450) + 50;
    var ghost_y = Math.floor(Math.random()*450) + 50;
    for(i=0;i<p_arr.length;i++){
        if(distance(p_arr.x, p_arr.y, ghost_x, ghost_y) < 200){
            ghostRandCoord(p_arr);
            //break;
        } else {
            return [ghost_x, ghost_y];
            break;
        }
    }
}