
//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/xzhy353923482/feeds/testdata/data';

var data = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  myButton1 = createButton('Red LED!');
  myButton2 = createButton('Yellow LED!');
  myButton3 = createButton('Green LED!');
  myButton4 = createButton('Close LED!');
  myButton1.position(0, windowHeight/2);
  myButton2.position(windowWidth/2 , windowHeight/2);
  myButton3.position(0 , (windowHeight/4)*3);
  myButton4.position(windowWidth/2 , (windowHeight/4)*3);
  myButton1.size(windowWidth/2, windowHeight/4);
  myButton2.size(windowWidth/2, windowHeight/4);
  myButton3.size(windowWidth/2, windowHeight/4);
  myButton4.size(windowWidth/2, windowHeight/4);
  myButton1.style('font-size', '30px');
  myButton2.style('font-size', '30px');
  myButton3.style('font-size', '30px');
  myButton4.style('font-size', '30px');
  myButton1.mousePressed(press_1);
  myButton2.mousePressed(press_2);
  myButton3.mousePressed(press_3);
  myButton4.mousePressed(press_4);
//   myButton.mouseReleased(off);
}

function draw() {
  background(120);
  if(data == 1){
    fill(250, 40, 100, 250);
    rect(0,0,windowWidth,windowHeight);
  }else if(data == 2){
    fill(250, 220, 70, 250);
    rect(0,0,windowWidth,windowHeight);
  }else if(data == 3){
    fill(50, 250, 60, 250);
    rect(0,0,windowWidth,windowHeight);
  }else{
    noFill();
  }
}

function press_1(){
    data = 1;
    console.log(data);
    sendData(data);
}

function press_2(){
    data = 2;
    console.log(data);
    sendData(data);
}

function press_3(){
    data = 3;
    console.log(data);
    sendData(data);
}

function press_4(){
    data = 0;
    console.log(data);
    sendData(data);
}

function sendData(turnOn){
  let postData ={
    "value": turnOn,
    "X-AIO-Key": "aio_iJCo84azfRaSHJPhmNKlI3Vr6Ldn"
  };
  httpPost(url, 'json', postData, function(result){
    console.log(result);
  });
}