function ghost(name, x, y, speed, freq){
    this.name = name;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.freq = freq;
    this.loadGhost = function(){
        var p = document.getElementById(this.name);
        if(p === null){
            var img_src = ["ghost_blue.gif", "ghost_green.gif", "ghost_red.gif"];
            var s = img_src[Math.floor(Math.random()*3)];
            p = document.createElement("IMG");
            p.setAttribute("src", s);
            p.setAttribute("id", this.name);
            p.style.height = "50px";
            p.style.width = "50px";
            p.style.zIndex = "999";
            //p.style.borderRadius = "100%";
            document.body.appendChild(p);
        }
        p.style.marginTop = this.y + "px";
        p.style.marginLeft = this.x + "px";
    };
    this.move = function(px, py){
        var sX = Math.sign(px - this.x);
        var sY = Math.sign(py - this.y);
        this.x = this.x + sX*this.speed;
        this.y = this.y + sY*this.speed;
        this.loadGhost();       
    };
}

