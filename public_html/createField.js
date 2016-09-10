function createField(size) {
    for (h = 1; h <= size; h++) {
        for (i = 1; i <= size; i++) {
            var temp = document.createElement("DIV");
            document.body.appendChild(temp);
            var divID = String(h) + String(i);
            temp.setAttribute("id", divID);
            document.getElementById(divID).addEventListener("click", clickAction);
            temp.style.width = "50px";
            temp.style.height = "50px";
            temp.style.marginTop = String(50*h) + "px";
            temp.style.marginLeft = String(50*i) + "px";
            if(i%2 === 0 && h%2 !== 0 || i%2 !== 0 && h%2 === 0){
                temp.style.backgroundColor = "#1357B0";
            } else {
                temp.style.backgroundColor = "#0FA33B";
            }
        };
    };
};

function clickAction(e){
    var x = e.srcElement.id;
    alert(x);
}