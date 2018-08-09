var population = [];
var popMax = 50;
var mutationRate = 0.01;
var target = [3];
var lifeSpan = 10000;
var r,g,b,a = 0;

function setup(){
  target[0] = 0;
  target[1] = 0;
  target[2] = 253;
  target[3] = 255;

  createCanvas(1000, 600);
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
  background(51);
  population.live();
  if(frameCount % lifeSpan === 0){
    population.grow();
    population.evaluate();
    population.selection();
  //  population.getDNA();
  }
}
function setTarget(r,g,b,a){
  target[0] = r;
  target[1] = g;
  target[2] = b;
  target[3] = a;
}
