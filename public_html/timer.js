function timer(f){
    this.t1;
    this.time;
    this.freq = f;
    this.start = function(){
        this.t1 = new Date().getTime();
        return this;
    };
    this.getDisplayTime = function(obj){
        var temp = new Date().getTime();
        var time = (temp-obj.t1)/1000;
        document.getElementById('time').innerHTML = time.toFixed(1);
        //t3 = setTimeout(obj.getDisplayTime, 50, obj);
        obj.time = time;
        return time;
    };
    this.stop = function(){
        //clearTimeout(t3);
    };
}