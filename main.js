narizX =0;
narizY =0;

function preload(){
    labios = loadImage('https://static.vecteezy.com/system/resources/previews/012/636/330/original/kiss-lips-color-png.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet esta inicializado')
}
function gotPoses(results){
    if(results.length > 0)
    console.log (results);
narizX = results[0].pose.nose.x -20;
narizY = results[0].pose.nose.y + 20;

}

function draw(){
    image(video,0,0,300,300);
image(labios,narizX,narizY,50,20);

}
function takeSnapshot(){
    save('filtro.png');

}
