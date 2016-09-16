function randomPoint(coins){
    var r = Math.floor(Math.random()*4);
    if(r === 1){
        var rand = Math.random();
    var val;
    if(rand >= 0.90){
        val = 10;
    } else if(rand < 0.90 && rand >= 0.70){
        val = 5;
    } else if(rand < 0.70 && rand >= 0.40){
        val = 3;
    } else if(rand < 0.40 && rand >= 0.20){
        val = 2;
    } else {
        val = 1;
    }
    coins[coins.length] = new coin(val).place();
    }
    return coins;
}