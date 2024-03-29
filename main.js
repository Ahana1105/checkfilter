nose_x = 0;
nose_y = 0;

function preload() {
clown_nose = loadImage("https://i.postimg.cc/mDP7pnFq/clown-nose.png");
}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is initialised');
}

function gotPoses(results) {
if (results.length > 0) {
nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y;

console.log(results);
console.log(results[0].pose.nose.x);
console.log(results[0].pose.nose.y);
}
}

function draw() {
image(video, 0, 0, 300, 300);
//fill(255, 0, 0);
//stroke(255,0,0);
//circle(nose_x, nose_y,20)
image(clown_nose, nose_x - 20, nose_y-15, 40, 40);
}

function take_snapshot() {
save('MyClownNose.jpeg');

}
