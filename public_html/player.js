function PlayerCharacter(name, /*hp,*/ speed, x, y, p_index, ctrl){
    this.name = name;
    this.isAlive = true;
    this.score = 0;
    //this.health = hp;
    this.speed = speed;
    this.controls = ctrl; //an array containing the keycodes
    this.x = x;
    this.y = y;
    this.index = p_index;
    this.dist = 0;
    this.z_boost = false;
    this.boost_count = 3;
    this.boost_used = 0;
    this.x_invin = false;
    this.invin_count = 3;
    this.invin_used = 0;
    this.isKeyDown = false;
    this.loadCharacter = function(){
        var p = document.getElementById(this.name);
        if(p === null){
            p = document.createElement("IMG");
            p.setAttribute("src", "pacman.gif");
            document.body.appendChild(p);
            p.setAttribute("id", this.name);
            p.setAttribute("class", "chars");
        }
        p.style.marginTop = this.y + "px";
        p.style.marginLeft = this.x + "px";
    };
    this.movePlayer = function(map, arr){
                        //uncomment to move only inside squares
        if(map[this.controls[0]] /*&& T%50 === 0*/ && this.x > 50){
            //left
            this.x -= this.speed;
            this.dist += this.speed;
        }
        if(map[this.controls[1]] && /*L%50 === 0 &&*/ this.y > 50){
            //up
            this.y -= this.speed;
            this.dist += this.speed;
        }
        if(map[this.controls[2]] && /*T%50 === 0 &&*/ this.x < 500){
            //right
            this.x += this.speed;
            this.dist += this.speed;
        }
        if(map[this.controls[3]] && /*L%50 === 0 &&*/ this.y < 500){
            //down
            this.y += this.speed;
            this.dist += this.speed;
        }
        
        if(map[this.controls[4]] && !this.z_boost && this.boost_count > 0){
            //activate speedboost
            this.z_boost = true;
            this.boost_count--;
            this.boost_used++;
            updatePowers();
            this.activateBoost(this);
        }
        if(map[this.controls[5]] && !this.x_invin && this.invin_count > 0){
            //activate invincibility
            this.x_invin = true;
            this.invin_count--;
            this.invin_used++;
            updatePowers();
            this.activateInvin(this);
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
        this.loadCharacter();
    };
    this.checkCoin = function(point_arr){
        for(i=0; i<point_arr.length; i++){
            if(Math.abs(this.x - point_arr[i].x*50) < 40 && Math.abs(this.y - point_arr[i].y*50) < 40){
                if(point_arr[i].value === "i"){
                    this.invin_count++;
                    updatePowers();
                } else if(point_arr[i].value === "b"){
                    this.boost_count++;
                    updatePowers();
                } else {
                    this.score += point_arr[i].value;
                }
                get("score"+this.index).innerHTML = this.score;
                point_arr[i].removeCoin();
                point_arr.splice(i, 1);
            }
        }
    };
    this.activateBoost = function(p){
        p.speed += 10;
        setTimeout(function(){
            p.speed -= 10;
            p.z_boost = false;
        }, 2000);
    };
    this.activateInvin = function(p){
        get(p.name).style.opacity = "0.3";
        setTimeout(function(){
            p.x_invin = false;
            get(p.name).style.opacity = "1";
        }, 1500);
    };
    this.kill = function(){
        if(!this.x_invin){
            this.isAlive = false;
            clearInterval(zz);
            get("game_text").style.visibility = "visible";
            get("start").style.visibility = "visible";
            get("multip").style.visibility = "visible";
            get("player0").style.visibility = "visible";
            if(multip){
                get("player1").style.visibility = "visible";
            }
            totalScore();
        };        
    };
};