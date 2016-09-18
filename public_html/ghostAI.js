function ghost(name, x, y, speed, freq){
    this.name = name;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.freq = freq;
    this.loadGhost = function(){
        var p = document.getElementById(this.name);
        if(p === null){
            var img_src = ["blueghost.gif", "purpleghost.gif", "redghost.gif", "ghostc.gif"];
            var s = img_src[Math.floor(Math.random()*4)];
            p = document.createElement("IMG");
            p.setAttribute("src", s);
            p.setAttribute("id", this.name);
            p.setAttribute("class", "chars");
            document.body.appendChild(p);
        }
        p.style.marginTop = this.y + "px";
        p.style.marginLeft = this.x + "px";
        return this;
    };
    this.move = function(ghost, player){
        var sX = Math.sign(player.x - ghost.x);
        var sY = Math.sign(player.y - ghost.y);
        ghost.x = ghost.x + sX*ghost.speed;
        ghost.y = ghost.y + sY*ghost.speed;
        ghost.loadGhost();
        if(Math.abs(player.x-ghost.x) < 50 && Math.abs(player.y-ghost.y) < 50){
            player.kill();
        }
    };
}