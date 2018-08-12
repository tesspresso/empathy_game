const numberOfPlayers = null;

class Player {
  constructor(name){
    this.name = name;
    //inca level 1-8
    this.incaLevel = Math.floor(Math.random() * 8) + 1;
    //power level 1-10
    this.powerLevel = Math.floor(Math.random() * 10) + 1;
    //make default power mask the power level; changes if they choose a mask
    this.powerMask = this.powerLevel;
    // gains, losses, & risk numbers:
    this.shortTerm = null; // random number based on numberOfPlayers
    this.mediumTerm = null; // random number based on numberOfPlayers
    this.longTerm = null; // random number based on numberOfPlayers
  }

  setPowerMask(number){
    const lowestPossible = this.powerLevel - 3;
    const highestPossible = this.powerLevel + 3;
    if (number <= highestPossible && number >= lowestPossible){
      this.powerMask = number;
    } else {
      console.log(`Oops! That number won't work. Please choose a number up to 3 digits below or above ${this.powerLevel}, your power level` )
    }
  }
}

const tess = new Player('Tess');
