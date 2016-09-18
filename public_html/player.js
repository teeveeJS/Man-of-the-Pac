function PlayerCharacter(name, /*hp,*/ speed, x, y, f){
    this.name = name;
    this.isAlive = true;
    this.score = 0;
    //this.health = hp;
    this.speed = speed;
    this.freq = f;
    this.x = x;
    this.y = y;
    this.loadCharacter = function(){
        var p = document.getElementById("player");   
        if(p === null){
            p = document.createElement("IMG");
            p.setAttribute("src", "pacman.gif");
            document.body.appendChild(p);
            p.setAttribute("id", "player");
            p.setAttribute("class", "chars");
        }
        p.style.marginTop = this.y + "px";
        p.style.marginLeft = this.x + "px";
    };
    this.move = function(dir, arr){
        if(this.isAlive){
                            //uncomment to move only inside squares
            if(dir === 37 /*&& T%50 === 0*/ && this.x > 50){
                //left
                this.x -= this.speed;
            } else if(dir === 38 && /*L%50 === 0 &&*/ this.y > 50){
                //up
                this.y -= this.speed;
            } else if(dir === 39 && /*T%50 === 0 &&*/ this.x < 500){
                //right
                this.x += this.speed;
            } else if(dir === 40 && /*L%50 === 0 &&*/ this.y < 500){
                //down
                this.y += this.speed;
            }
            if(this.x > 500){
                this.x = 500;
            } else if(this.x < 50){
                this.x = 50;
            }
            if(this.y > 500){
                this.y = 500;
            } else if(this.y < 50){
                this.y = 50;
            }
            this.checkCoin(arr);
        };
    };
    this.checkCoin = function(point_arr){
        for(i=0; i<point_arr.length; i++){
            if(Math.abs(this.x - point_arr[i].x*50) < 40 && Math.abs(this.y - point_arr[i].y*50) < 40){
                if(point_arr[i].value === "i"){
                    invin_count++;
                    updatePowers();
                } else if(point_arr[i].value === "b"){
                    boost_count++;
                    updatePowers();
                } else {
                    this.score += point_arr[i].value;
                }
                document.getElementById("score").innerHTML = this.score;
                point_arr[i].kill();
                point_arr.splice(i, 1);
            }
        }
    };
    this.activateBoost = function(p){
        p.speed += 10;
        setTimeout(function(){
            p.speed -= 10;
            z_boost = false;
        }, 2000);
    };
    this.kill = function(){
        if(!x_invin){
            this.isAlive = false;
            clearInterval(zz);
            document.getElementById("game_text").style.visibility = "visible";
            document.getElementById("game_text").innerHTML = "Game Over!";
            totalScore();
        };        
    };
};