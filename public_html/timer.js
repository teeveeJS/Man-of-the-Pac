function timer(f){
    this.t1;
    this.t2;
    this.freq = f;
    this.start = function(){
        this.t1 = new Date().getTime();
        console.log("start time:" + this.t1);
    };
    this.getDisplayTime = function(){
        var temp = new Date().getTime();
        var time = (temp-clock.t1)/1000;
        document.getElementById('time').innerHTML = time.toFixed(1);
        t3 = setTimeout(clock.getDisplayTime, 10);
    };
    this.stop = function(){
        clearTimeout(t3);
        /*
        this.t2 = new Date().getTime();
        var t = this.t2 - this.t1;
        console.log("final time: " + t);*/
    };
}