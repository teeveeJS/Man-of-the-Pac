function overlap(px, py, gx, gy){
    //player size and ghost size = 50px by 50px
    if(px-gx < 50 && gx-px < 50 && py-gy < 50 && gy-py < 50){
        return true;
    }
    return false;
}

