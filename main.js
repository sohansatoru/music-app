song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightristY = 0;

function peload(){
  
  song = loadSound("music.mp3");
   

}

function stop(){
  song.stop();
}


function play() 
{
  song.play();
  song.setVolume(1);
  song.rate(1);
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose ', gotPoses);

  }

  function modelLoaded(){
    console.log('poseNet Is Initialized');
  }

  function draw(){
    image(video, 0, 0, 500, 500)

    fill("#FF0000");
    stroke("#FF0000");

    if
    (scoreleftWrist > 0.2)
    {
      circle(leftWristX,LeftWristY,20);
      InNumberlrftWristY = Number(leftWrist);
      remove_decimals = floor(InNumberleftWrist);
      volume = remove_decimals/500;
      document.getElementById("volume").innerHTML = "Volume = " + volume;
      song.setVolume("volume");
      
    }
  }



  function gotPoses(results){
    if(results.length > 0)
    {
      console.log('results')

      leftWristX = results[0].pose.leftWrist.X;
      leftWristY = results[0].pose.leftWrist.Y;
      console.log("leftWristX = "+ leftWristX + "leftWristY = " +leftWristY);

      rightWristX = results[0].pose.rightWrist.X;
      rightWristY = results[0].pose.rightWrist.Y;
      console.log("rightWristX = "+ rightWristX + "rightWristY = " +rightWristY);

    }
  }


  

  