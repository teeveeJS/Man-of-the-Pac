function startMoving(e){
    var k = e.keyCode;
    map[k] = e.type === "keydown";
    //allows for multiple key presses
    if(player.isAlive){
        if(map[37] || map[38] || map[39] || map[40]){
            //player.move(k, coins);
            isKeyDown = true;
            keyDown = k;
        } else if(k === 90 && !z_boost && boost_count > 0){
            //activate speedboost
            z_boost = true;
            boost_count--;
            boost_used++;
            updatePowers();
            player.activateBoost(player);       
            //or update player.speed and do setTimeout() for its expiration
        } else if(k === 88 && !x_invin && invin_count > 0){
            //activate invincibility
            x_invin = true;
            invin_count--;
            invin_used++;
            document.getElementById("player").style.opacity = "0.3";
            updatePowers();
            setTimeout(function(){
                x_invin = false;
                document.getElementById("player").style.opacity = "1";
            }, 1500);
        }
    }
}

function stopMoving(e){
    var k = e.keyCode;
    map[k] = e.type === "keydown";
    isKeyDown = false;
}