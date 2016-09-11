function timer(f){
    this.t1;
    this.t2;
    this.freq = f;
    this.start = function(){
        this.t1 = new Date().getTime();
    };
    this.getDisplayTime = function(){
        //IMPORTANT: setInterval must be done in the main file!
        if(this.t1 === null){
            this.start();
        }
        var temp = new Date().getTime();
        //add other formatting to the display time
        var time = parseInt(temp - this.t1)/1000;
        //change the id to whatever depending on the output
        document.getElementById("time").innerHTML = time;
    };
    this.stop = function(){
        clearInterval(x);
        this.t2 = new Date().getTime();
    };
}