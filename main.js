paralyzed = "";

happy_face = "";

function preload(){
    paralyzed = loadSound("Paralyzed.mp3");
    happy_face = loadSound("Happy Face.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
}