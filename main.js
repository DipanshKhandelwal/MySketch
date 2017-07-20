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