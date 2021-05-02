var carx = 10;
var cary = 10;
var width = 100;
var height = 120;
var carimage = "ferrari.png";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvasimage = "track.jpg";

function add(){
    backgroundimg = new Image();
    backgroundimg.src = canvasimage;
    backgroundimg.onload = uploadcanvas;

    carimg = new Image();
    carimg.src = carimage;
    carimg.onload = uploadcar;
}
function uploadcanvas(){
    ctx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(carimg,carx,cary,width,height);
}

addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        console.log("up");
    }
    if(keypressed == '40'){
        console.log("down");
    }
    if(keypressed == '39'){
        console.log("right");
    }
    if(keypressed == '37'){
        console.log("left");
    }
}