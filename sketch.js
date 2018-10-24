var mySong;
var analyser;
var myImage;


function preload(){
  // put preload code here
  myImage = loadImage('./assets/dereg.png');
  mySong = loadSound('./assets/Gibraltar.mp3');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(255);
  analyser = new p5.Amplitude;
   analyser.setInput(mySong);

}

function draw() {
  // put drawing code here
  // image(myImage, 0, 0, myImage.width, myImage.height);
  if (mouseX < width/2) {
    //stop
     background(219,156,100);
     mySong.pause();
   } else {
     //play
     background(83,130,150);
     if(mySong.isPlaying() == false) {
      mySong.play();

     }
     var volume = analyser.getLevel();
     console.log(volume);
     volume = map(volume, 0, 1, 50, width/2);

   }

   image(myImage, 10, 60, 850, 600);

   ellipse(290, 70, volume);
   triangle(volume, volume, 560, volume, 330, 470);
   fill(255, 80);
   noStroke();

push();
   noStroke();
   fill(255);
   textSize(18);
   textFont('Avenir');
   text('Beirut / Gibraltar', 895, 75);
   pop();



}

function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}
