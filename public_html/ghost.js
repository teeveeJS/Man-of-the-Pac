function ghostc(name, x, y, speed, freq){
    this.name = name;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.freq = freq;
    this.loadGhost = function(){
        var p = document.getElementById(this.name);
        if(p === null){
            p = document.createElement("IMG");
            p.setAttribute("src", "ghostc.gif");
            p.setAttribute("id", this.name);
            p.style.height = "50px";
            p.style.width = "50px";
            p.style.zIndex = "999";
            document.body.appendChild(p);
        }
        p.style.marginTop = this.y + "px";
        p.style.marginLeft = this.x + "px";
    };
    this.move = function(ghost){
        var s = [-1, 1];
        var n = s[Math.floor(Math.random()*s.length)];
        var m = s[Math.floor(Math.random()*s.length)];
        ghost.x = ghost.x + n*ghost.speed;
        ghost.y = ghost.y + m*ghost.speed;
        ghost.loadGhost();
    };
}