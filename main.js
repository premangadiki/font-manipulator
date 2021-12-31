function setup(){
    video = createCapture(VIDEO);
    video.size(600 , 600);
    canvas = createCanvas(600 , 600);
    canvas.position(560 , 150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotresults);
} 

function modelLoaded(){
    console.log("modelloaded!!!");
}

function gotresults(results){
    console.log(results);
}