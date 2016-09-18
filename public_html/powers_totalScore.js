function updatePowers(){
    document.getElementById("powers").innerHTML = "Boosts: " + boost_count + "<br/>" + "Invins: " + invin_count;
}

function totalScore(){
    var total_score;
    var coin_score = document.getElementById("score").innerHTML;
    var time = document.getElementById("time").innerHTML;
    total_score = parseInt(coin_score) + Math.round(parseInt(time)/2) + parseInt(invin_count)*10 + parseInt(invin_used)*10 + parseInt(boost_count)*5 + parseInt(boost_used)*5;
    document.getElementById("t_coin").innerHTML = coin_score;
    document.getElementById("t_time").innerHTML = Math.round(time/2);
    document.getElementById("t_boost").innerHTML = boost_count*5 + boost_used*5;
    document.getElementById("t_invin").innerHTML = invin_count*10 + invin_used*10;
    document.getElementById("t_total").innerHTML = total_score;
    return total_score;
};