function PlayerCharacter(name, /*hp,*/ speed, x, y){
    this.name = name;
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
}

