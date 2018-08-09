function Population(t, m, num){

  this.population;
  //this.target = t;
  this.mutationRate = m;
  this.perfectScore = 1;


  this.population = [];
  for(var i = 0; i < num; i++){
    this.population[i] = new Spider(random(0,255), random(0,255), random(0, 255), 255, t);
  }

  this.live = function(){
    for(var i = 0; i < num; i++){
      this.population[i].show();
    //  this.population[i].moveAround();
    }
  }
  this.grow = function(){
    for(var i = 0; i < num; i++){
      this.population[i].grow();
    }
  }

  this.evaluate = function(){
    var maxFit = 0.1;
    for(var i = 0; i < num; i++){
      this.population[i].calcFittnes();
      //console.log(this.population[i].fittnes);
      if(this.population[i].fittnes > maxFit){
        maxFit = this.population[i].fittnes;
      }
    }

    for(var i = 0; i < num; i++){
      this.population[i].fittnes /= maxFit;
    }

    this.matingpool = [];
    for(var i = 0; i < num; i++){
      var n = this.population[i].fittnes * 100;
      for (var j = 0; j < n; j++) {
        this.matingpool.push(this.population[i]);
      }
    }

  }

  this.selection = function() {
   var newSpiders = [];
   for (var i = 0; i < this.population.length; i++) {
     var parentA = random(this.matingpool);
     var parentB = random(this.matingpool);
     var child = parentA.crossover(parentB);
     child.mutate(this.mutationRate);
     newSpiders[i] = child;
   }
   this.population = newSpiders;
}

  this.getDNA = function(){
    for(var i = 0; i < num; i++){
      console.log(this.population[i].genes);
    }
  }
  this.setMutaRate = function(mRate){
      this.mutationRate = mRate;
  }





}
