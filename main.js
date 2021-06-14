var drawingCanvas=null;
var video=null;

function preload(){
}

function setup(){
    drawingCanvas=createCanvas(640, 480);
    drawingCanvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
    stroke('blue');
    circle(0, 0, 50);
    circle(640, 0, 50);
    circle(0, 480, 50);
    circle(640, 480, 50);
    circle(320, 0, 50);
    circle(320, 480, 50);
    circle(0, 240, 50);
    circle(640, 240, 50);
}

function takeSnapshot(){
    save(prompt('Enter in a name for your file!')+'.png');
}