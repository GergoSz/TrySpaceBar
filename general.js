var population = [];
var popMax = 50;
var mutationRate = 0.01;
var target = [3];
var lifeSpan = 1;
var r,g,b,a = 0;
var repalySpeed = 1;
var canvas;

function setup(){

  target[0] = 51;
  target[1] = 51;
  target[2] = 51;

  centerCanvas();

  population = new Population(target, mutationRate, popMax);

  /*for (var i = 0; i < 10; i++) {
    spiders.push(new Spider(random(100,255),random(100,255),random(100,255),255));
  }*/
}
function keyPressed(){
  if(key == ' ')
  //population.grow();
  population.evaluate();
  population.selection();
}

function draw(){
  background(target[0], target[1], target[2]);
  population.live();

  if(frameCount % lifeSpan === 0){
    //population.grow();
    population.evaluate();
    population.selection();
    //population.getDNA();
  }
}

function setTarget(picker){
  target[0] = Math.round(picker.rgb[0]);
  target[1] = Math.round(picker.rgb[1]);
  target[2] = Math.round(picker.rgb[2]);
  target[3] = 255;
}

function setMutationRate(mutRate){
  mutationRate = mutRate/10;
  console.log(mutationRate);
}

function setSpeed(speed){
  lifeSpan = 101 - speed;
  console.log(lifeSpan);
}

function centerCanvas() {
  canvas = createCanvas(windowWidth, windowHeight - 100);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height + 100) / 2;
  canvas.position(x, y);
}

function windowResized() {
  centerCanvas();
}