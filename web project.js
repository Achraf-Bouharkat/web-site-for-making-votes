window.onload = function(){
let x,y,z,c;
x = Number(x);
y = Number(y);
z = Number(z);
x = 0;
y = 0;
z = 0;
c = document.getElementById("div9");
document.getElementById("img1").addEventListener("click", function(){
    if(document.getElementById("p1").style.display = "none" && document.getElementById("btn1").style.display == "none"){
        document.getElementById("p1").style.display = "block";
        document.getElementById("btn1").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("btn3").style.display = "none";
    }
    else{
        document.getElementById("p1").style.display = "none";
        document.getElementById("btn1").style.display = "none";
    }
})
document.getElementById("img2").addEventListener("click",function(){
    if(document.getElementById("p2").style.display = "none" && document.getElementById("btn2").style.display == "none"){
        document.getElementById("p2").style.display = "block";
        document.getElementById("btn2").style.display = "block";
        document.getElementById("p3").style.display = "none";
        document.getElementById("btn3").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("btn1").style.display = "none";
    }
    else{
        document.getElementById("p2").style.display = "none";
        document.getElementById("btn2").style.display = "none";
    }
})
document.getElementById("img3").addEventListener("click",function(){
    if(document.getElementById("p3").style.display = "none" && document.getElementById("btn3").style.display == "none"){
        document.getElementById("p3").style.display = "block";
        document.getElementById("btn3").style.display = "block";
        document.getElementById("p1").style.display = "none";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("p2").style.display = "none";
        document.getElementById("btn2").style.display = "none";
    }
    else{
        document.getElementById("p3").style.display = "none";
        document.getElementById("btn3").style.display = "none";
    }
})
document.getElementById("btn1").onclick = function(){
    if(y != 0 || z != 0 || x >= 1){
        window.alert("you can't vote twice");
    }
    else{
    x++;
    console.log(x);
    document.getElementById("div2").style.width = x + "pc";
    document.getElementById("div2").innerHTML = x + " Votes";
    }
}
document.getElementById("btn2").onclick = function(){
    if(x != 0 || z != 0 || y >= 1){
        window.alert("you can't vote twice");
    }
    else{
    y++;
    console.log(y);
    document.getElementById("div3").style.width = y + "pc";
    document.getElementById("div3").innerHTML = y + " Votes";
    }
}
document.getElementById("btn3").onclick = function(){
    if(y != 0 || x != 0 || z >= 1){
        window.alert("you can't vote twice");
    }
    else{
    z++;
    console.log(z);
    document.getElementById("div10").style.width = z + "pc";
    document.getElementById("div10").innerHTML = z + " Votes";
    }
}
document.getElementById("btn4").onclick = function(){
 if(c.style.display == "none"){
    c.style.display = "block";
 }
 else{
    c.style.display = "none";
 }
}
document.getElementById("btn5").onclick = function(){
    if(document.getElementById("div4").style.display == "none"){
        document.getElementById("div4").style.display = "block";
        document.getElementById("btn5").innerHTML = "Hide Results";
    }
    else{
        document.getElementById("div4").style.display = "none";
        document.getElementById("btn5").innerHTML = "Show Results";
    }
}
document.getElementById("btn6").onclick = function(){
if(x > y && x > z){
    document.getElementById("p7").innerHTML = "Hassan is on top of the vote";
}
else if(y > x && y > z){
    document.getElementById("p7").innerHTML = "Zaki is on top of the vote";
}
else if(z > x && z > y){
    document.getElementById("p7").innerHTML = "Yassine is on top of the vote";
}
else{
    document.getElementById("p7").innerHTML = "";
}
}
document.getElementById("btn7").onclick = function(){
    if(x != 0){
        x = 0;
        console.log(x);
    document.getElementById("div2").style.width = x + "pc";
    document.getElementById("div2").innerHTML = "";
    document.getElementById("p7").innerHTML = "";
    }
    else if(y != 0){
        y = 0;
        console.log(y);
    document.getElementById("div3").style.width = y + "pc";
    document.getElementById("div3").innerHTML = "";
    document.getElementById("p7").innerHTML = "";
    }
    else if(z != 0){
        z = 0;
        console.log(z);
    document.getElementById("div10").style.width = z + "pc";
    document.getElementById("div10").innerHTML = "";
    document.getElementById("p7").innerHTML = "";
    }
}
}