function startMoving(e){
    var k = e.keyCode;
    if(k === 37 || k === 38 || k === 39 || k === 40){
        //player.move(k, coins);
        isKeyDown = true;
        keyDown = k;
    } else {
        //probably do nothing
    }

}
function stopMoving(e){
    isKeyDown = false;
}