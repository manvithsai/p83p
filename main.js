var mouseEvent=" ";
var last_position_of_x,last_position_of_y;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var colour="black";
var width_of_line=5;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseUP",mymouseUP);
function mymouseUP(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}
function mymousedown(e){
    colour=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line");
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
function mymouseUP(e){
    colour=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line");
    radius=document.getElementById("radius").value;
    mouseEvent="mouseUP";
}
function mymouseleave(e){
    colour=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line");
    radius=document.getElementById("radius").value;
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    var current_x_value=e.clientX-canvas.offsetLeft;
    var current_y_value=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width_of_line;
    console.log("last position of x and y cordinates=");
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current position of x and y cordinates=");
    console.log("x="+current_x_value+"y="+current_y_value);
    ctx.moveTo(current_x_value,current_y_value);
    ctx.stroke();
    }
last_position_of_x=current_x_value;
last_position_of_y=current_y_value;
}