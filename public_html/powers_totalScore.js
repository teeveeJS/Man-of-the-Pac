function updatePowers(){
    if(multip){
        get("powers").innerHTML = "<span style='font-weight: bold'>" + players[0].name + "</span>"
                + "<br/> Boosts: " + players[0].boost_count
                + "<br/> Invins: " + players[0].invin_count
                + "<br/><br/>" + "<span style='font-weight: bold'>" + players[1].name + "</span>"
                + "<br/> Boosts: " + players[1].boost_count
                + "<br/> Invins: " + players[1].invin_count;
        
    } else {
        get("powers").innerHTML = "Boosts: " + players[0].boost_count + "<br/>" + "Invins: " + players[0].invin_count;
    }
    
}

function totalScore(){
    var total_score;
    var coin_score = players[0].score;
    var time = get("time").innerHTML;
    var pps = Math.round(parseInt(coin_score)*10/parseInt(time));
    if(time < 20){
        time = 2;
        pps = 0;
    }
    total_score = parseInt(coin_score)
            + Math.round(parseInt(time)/2)
            + parseInt(players[0].invin_count)*3
            + parseInt(players[0].invin_used)*10
            + parseInt(players[0].boost_count)*2
            + parseInt(players[0].boost_used)*5
            + pps
            + Math.round(players[0].dist/500);
    get("t_coin").innerHTML = coin_score;
    get("t_time").innerHTML = Math.round(time/2);
    get("t_pps").innerHTML = pps;
    get("t_boost").innerHTML = players[0].boost_count*2 + players[0].boost_used*5;
    get("t_invin").innerHTML = players[0].invin_count*3 + players[0].invin_used*10;
    get("t_dist").innerHTML = Math.round(players[0].dist/500);
    get("t_total").innerHTML = total_score;
    return total_score;
};