noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;


function setup(){
    video=createCapture(VIDEO);
    video.size=(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}




function modelLoaded(){
    console.log('PoseNet Is Intialled!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    noseX=results[0].pose.x;
    noseY=results[0].pose.y;
    console.log("noseX="+noseX+"noseY"+noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);


    }
}
function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of a square will be="+ difference + "px";
    fill('#50a832');
stroke('#a86d32');
square(noseX,noseY,difference);
}