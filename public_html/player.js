function PlayerCharacter(name, /*hp,*/ speed, x, y){
    this.name = name;
    this.isAlive = true;
    this.score = 0;
    //this.health = hp;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.loadCharacter = function(){
        var p = document.getElementById("player");   
        if(p === null){
            //p = document.createElement("DIV");
            p = document.createElement("IMG");
            p.setAttribute("src", "pacman.gif");
            document.body.appendChild(p);
            p.setAttribute("id", "player");
            //p.style.backgroundColor = "red";
            p.style.height = "50px";
            p.style.width = "50px";
            p.style.zIndex = "999";
            //p.style.borderRadius = "100%";
        }
        p.style.marginTop = this.y + "px";
        p.style.marginLeft = this.x + "px";
    };
    this.move = function(dir, arr){
        var T = parseInt(document.getElementById('player').style.marginTop);
        var L = parseInt(document.getElementById('player').style.marginLeft);
        if(this.isAlive){
                            //uncomment to move only inside squares
            if(dir === 37 /*&& T%50 === 0*/ && L > 50){
                //left
                this.x -= this.speed;
            } else if(dir === 38 && /*L%50 === 0 &&*/ T > 50){
                //up
                this.y -= this.speed;
            } else if(dir === 39 && /*T%50 === 0 &&*/ L < 500){
                //right
                this.x += this.speed;
            } else if(dir === 40 && /*L%50 === 0 &&*/ T < 500){
                //down
                this.y += this.speed;
            }
            this.checkCoin(arr);
        };
    };
    this.checkCoin = function(point_arr){
        for(i=0; i<point_arr.length; i++){
            if(Math.abs(this.x - point_arr[i].x*50) < 15 && Math.abs(this.y - point_arr[i].y*50) < 15){
                this.score += point_arr[i].value;
                document.getElementById("score").innerHTML = this.score;
                point_arr[i].kill();
                point_arr.splice(i, 1);
            }
        }
    };
    this.kill = function(){
        this.isAlive = false;
        //clearInterval(t);
        //clearInterval(t2);
        clearInterval(zz);
        document.getElementById("game_text").style.visibility = "visible";
        document.getElementById("game_text").innerHTML = "Game Over!";
    };
}