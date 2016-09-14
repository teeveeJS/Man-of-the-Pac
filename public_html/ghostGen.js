function ghostGen(px, py){
    var ghost_name = "ghost" + ghosts.length;
    var ghost_x = (parseInt(px) > 280) ? 100 : 500;
    var ghost_y = (parseInt(py) > 280) ? 100 : 500;
    ghosts[ghosts.length] = new ghost(ghost_name, ghost_x, ghost_y, 5, 100);
}

