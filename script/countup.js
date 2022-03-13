function Btn(){
var counter=document.querySelector(".counter");
let count=1;
setInterval(() => {
    if(count<incrementBtn()) {
         count++;
    counter.innerText=count;
    }
},100);

}

function incrementBtn(){
    var element=document.getElementById("data")
    var value=element.innerText;
    value
    
    document.getElementById("data").innerText=value
    }