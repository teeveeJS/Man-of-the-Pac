function updatePowers(){
    document.getElementById("powers").innerHTML = "Boosts: " + boost_count + "<br/>" + "Invins: " + invin_count;
}

function totalScore(){
    var total_score;
    var coin_score = document.getElementById("score").innerHTML;
    var time = document.getElementById("time").innerHTML;
    var pps = Math.round(parseInt(coin_score)*10/parseInt(time));
    if(time < 20){
        time = 2;
        pps = 0;
    }
    total_score = parseInt(coin_score) + Math.round(parseInt(time)/2) + parseInt(invin_count)*3 + parseInt(invin_used)*10 + parseInt(boost_count)*2 + parseInt(boost_used)*5 + pps;
    document.getElementById("t_coin").innerHTML = coin_score;
    document.getElementById("t_time").innerHTML = Math.round(time/2);
    document.getElementById("t_pps").innerHTML = pps;
    document.getElementById("t_boost").innerHTML = boost_count*2 + boost_used*5;
    document.getElementById("t_invin").innerHTML = invin_count*3 + invin_used*10;
    document.getElementById("t_total").innerHTML = total_score;
    return total_score;
};