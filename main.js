var canvas = document.getElementById('drawingCanvas');
var canvasContext = canvas.getContext('2d');
var clear = document.getElementById('clear');
var colorbrush;
var defaultcolor = 'black';
colorbrush = defaultcolor;
var dragging = false;
canvas.width = 1000;
canvas.height = 550;
var radius = 10;

var putPoint = function (e) {
    if(dragging == true){
    canvasContext.lineTo(e.offsetX, e.offsetY);
    canvasContext.stroke();
    canvasContext.beginPath();
    canvasContext.fillStyle = colorbrush;
    canvasContext.arc(e.offsetX, e.offsetY, radius, 0, 2*Math.PI);
    canvasContext.fill();
    canvasContext.beginPath();
    canvasContext.moveTo(e.offsetX, e.offsetY);
    }
}

var engage = function(e) {
    dragging = true;
    putPoint(e);
}
var disengage = function(){
    dragging = false;
    canvasContext.beginPath();
}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
    print_voucher();
}

clear.addEventListener('click',function(){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.beginPath();
});

function print_voucher(){
    var win=window.open();
    win.document.write("<br><img src='"+canvas.toDataURL()+"'/>");
    win.print();
    win.location.reload();
}

function squareup(){
    document.getElementById('red1').style.borderRadius = "10px";
    document.getElementById('green1').style.borderRadius = "10px";
    document.getElementById('white1').style.borderRadius = "10px";
    document.getElementById('blue1').style.borderRadius = "10px";
    document.getElementById('black1').style.borderRadius = "10px";
    document.getElementById('yellow1').style.borderRadius = "10px";
}

document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'drawingCanvas', 'My_Drawing.png');
}, false);

document.getElementById('chosencolor').addEventListener('click', function(){
    x=document.getElementById('chosencolor').style.backgroundColor;
   colorbrush = x;
    canvasContext.strokeStyle = x;
    document.getElementById('color').style.backgroundColor=x;
});

document.getElementById('blue1').addEventListener('click', function(){
   colorbrush = 'dodgerblue';
    canvasContext.strokeStyle = 'dodgerblue';
    squareup();
    document.getElementById('blue1').style.borderRadius = "20px";
  document.getElementById('color').style.backgroundColor='dodgerblue';
});

document.getElementById('red1').addEventListener('click', function(){
   colorbrush = 'red';
    canvasContext.strokeStyle = 'red';
    squareup();
    document.getElementById('red1').style.borderRadius = "20px";
    document.getElementById('color').style.backgroundColor='red';
});

document.getElementById('white1').addEventListener('click', function(){
   colorbrush = 'white';
    canvasContext.strokeStyle = 'white';
    squareup();
    document.getElementById('white1').style.borderRadius = "20px";
  document.getElementById('color').style.backgroundColor='#ffffff';
});

document.getElementById('black1').addEventListener('click', function(){
   colorbrush = 'black';
    canvasContext.strokeStyle = 'black';
    squareup();
    document.getElementById('black1').style.borderRadius = "20px";
  document.getElementById('color').style.backgroundColor='black';
});