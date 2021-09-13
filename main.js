var video_load = " "; 
var status_load = " "; 

function preload(){
    video_load = createVideo("video.mp4");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center(); 
} 

function draw(){
    image(video_load, 0, 0, 500, 500);
} 

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model loaded!"); 
    status_load = "true"; 
    video_load.loop();
    video_load.speed(1); 
    video_load.volume(0);
} 