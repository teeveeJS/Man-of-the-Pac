function startMoving(e){
    var k = e.keyCode;
    //z === 90
    //x === 88
    if(k === 37 || k === 38 || k === 39 || k === 40){
        //player.move(k, coins);
        isKeyDown = true;
        keyDown = k;
    } else if(k === 90 && !z_boost && boost_count > 0){
        //activate speedboost
        z_boost = true;
        boost_count--;
        updatePowers();
        player.activateBoost(player);       
        //or update player.speed and do setTimeout() for its expiration
    } else if(k === 88 && !x_invin && invin_count > 0){
        //activate invincibility
        x_invin = true;
        invin_count--;
        updatePowers();
        setTimeout(function(){
            x_invin = false;
        }, 1500);
    }

}
function stopMoving(e){
    isKeyDown = false;
}