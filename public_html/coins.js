function coin(value){
    this.value = value;
    this.x = Math.ceil(Math.random()*10);
    this.y = Math.ceil(Math.random()*10);
    this.id = this.y.toString() + this.x.toString();
    this.place = function(){
        var e = document.createElement("DIV");
        e.setAttribute("id", this.id+"coin");
        e.setAttribute("class", "coin_class");
        if(value === "b"){
            e.style.backgroundColor = "blue";
        } else if(value === "i"){
            e.style.backgroundColor = "white";
        } else {
            e.style.backgroundColor = "yellow";
            e.innerHTML = this.value;
        }        
        e.style.textAlign = "center";        
        if(!get(this.id).hasChildNodes()){
            get(this.id).appendChild(e);
        }
        return this;
    };
    this.removeCoin = function(){
        if(get(this.id).hasChildNodes()){
            get(this.id).removeChild(get(this.id+"coin"));
        };
    };
}