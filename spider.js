function Spider(r,g,b,a,t){

  if(this.x){

  }else{
    this.x = random(20,width-20);
    this.y = random(20,height-20);
  }

    this.target = t;

    this.genes = [3];
    this.genes[0] = r;
    this.genes[1] = g;
    this.genes[2] = b;
    this.genes[3] = a;

  this.mateable = false;
  this.size = 10;
  this.fittnes;

  this.show = function(){
    fill(this.genes[0],this.genes[1],this.genes[2],this.genes[3]);
    rect(this.x,this.y,this.size,this.size);
  }
  this.grow = function(){
    for (var i = 0; i < 10; i++) {
        this.size++;
    }
    this.mateable = true;
  }

  this.moveAround = function(){
    if(this.mateable){

    }else{
      this.xdir = random(-1,1);
      this.ydir = random(-1,1);
      this.x += random(5) * this.xdir;
      this.y += random(5) * this.ydir;
    }
  }

  this.crossover = function(parent){
      var child = [];
      var crossover = floor(random(this.genes.length));

      for (var i = 0; i < this.genes.length; i++) {
        if(i > crossover) child[i] = this.genes[i];
        else child[i] = parent.genes[i];
      }
      var newgenes = new Spider(child[0], child[1], child[2], child[3]);
      return newgenes;
  }


  this.mutate = function(m){
    for (var i = 0; i < this.genes.length; i++) {
      if(m > random(1)){
        //RED
        if(this.genes[0] > target[0]){
          this.genes[0] -= random(1,10);
        }
        if(this.genes[0] < target[0]){
          this.genes[0] += random(1,10);
        }
        //GREEN
        if(this.genes[1] > target[1]){
          this.genes[1] -= random(1,10);
        }
        if(this.genes[1] < target[1]){
          this.genes[1] += random(1,10);
        }
        //BLUE
        if(this.genes[2] > target[2]){
          this.genes[2] -= random(1,10);
        }
        if(this.genes[2] < target[2]){
          this.genes[2] += random(1,10);
        }

      }
    }
  }


  this.calcFittnes = function(){

    this.redF;
    this.greenF;
    this.blueF;

    //RED

    if(this.genes[0] > target[0]){
      this.redF = 1-((this.genes[0]-target[0])/255);
    }
    if(this.genes[0] < target[0]){
      this.redF = 1-((target[0]-this.genes[0])/255);
    }
    if(this.genes[0] === target[0]){
      this.redF = 1;
    }

    //GREEN

    if(this.genes[1] > target[1]){
      this.greenF = 1-((this.genes[1]-target[1])/255);
    }
    if(this.genes[1] < target[1]){
      this.greenF = 1-((target[1]-this.genes[1])/255);
    }
    if(this.genes[1] === target[1]){
      this.greenF = 1;
    }

    //BLUE

    if(this.genes[2] > target[2]){
      this.blueF = 1-((this.genes[2]-target[2])/255);
    }
    if(this.genes[2] < target[2]){
      this.blueF = 1-((target[2]-this.genes[2])/255);
    }
    if(this.genes[2] === target[2]){
      this.blueF = 1;
    }

    this.fittnes = (this.redF + this.greenF + this.blueF)/3;


    // V1:*/ this.fittnes = (this.genes[0] / 255);
  }

}
