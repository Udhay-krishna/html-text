function incrementBtn(){
var element=document.getElementById("counter")
var value=element.innerHTML;
++value

document.getElementById("counter").innerHTML=value
}