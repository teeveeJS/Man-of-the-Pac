function coin(value){
    this.value = value;
    this.x = Math.ceil(Math.random()*10);
    this.y = Math.ceil(Math.random()*10);
    this.id = this.y.toString() + this.x.toString();
    this.place = function(){
        var e = document.createElement("DIV");
        e.setAttribute("id", this.id+"coin");
        e.style.borderRadius = "100%";
        e.style.backgroundColor = "yellow";
        e.style.height = "30px";
        e.style.width = "30px";
        e.style.position = "relative";
        e.style.marginTop = "10px";
        e.style.marginLeft = "10px";
        e.innerHTML = this.value;
        e.style.textAlign = "center";        
        if(!document.getElementById(this.id).hasChildNodes()){
            document.getElementById(this.id).appendChild(e);
        }
        return this;
    };
    this.kill = function(){
        document.getElementById(this.id+"coin").remove();
        delete this.x;
        delete this.y;
        delete this.id;
        delete this.value;
    };
}