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
    for(i=0;i<players.length;i++){
        var total_score;
        var coin_score = players[i].score;
        var time = get("time").innerHTML;
        var pps = Math.round(parseInt(coin_score)*10/parseInt(time));
        if(time < 20){
            time = 2;
            pps = 0;
        }
        if(players[i].isAlive){
            death_p = death_penalty;
        } else {
            death_p = 0;
        };
        total_score = parseInt(coin_score)
                + Math.round(parseInt(time)/2)
                + parseInt(players[i].invin_count)*3
                + parseInt(players[i].invin_used)*10
                + parseInt(players[i].boost_count)*2
                + parseInt(players[i].boost_used)*5
                + pps
                + Math.round(players[i].dist/500)
                + death_p;
        get("t_coin"+i).innerHTML = coin_score;
        get("t_time"+i).innerHTML = Math.round(time/2);
        get("t_pps"+i).innerHTML = pps;
        get("t_boost"+i).innerHTML = players[i].boost_count*2 + players[i].boost_used*5;
        get("t_invin"+i).innerHTML = players[i].invin_count*3 + players[i].invin_used*10;
        get("t_dist"+i).innerHTML = Math.round(players[i].dist/500);
        get("t_death"+i).innerHTML = death_p;
        get("t_total"+i).innerHTML = total_score;
    }
};