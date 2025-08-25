import { Card } from "/src/components/card.js";
import * as db from "/src/game/db.js"

export class LineUp {
  constructor(club, tier, Iformation) {
    this.club = club;
    this.tier = tier;
    this.positions = [];
    this.putInFormation()
    // GK = new Card("GK");
    // LE = new Card("LE");
    // ZGE = new Card("ZGE");
    // ZGC = new Card("ZGC");
    // ZGD = new Card("ZGD");
    // LD = new Card("LD");
    // ADE = new Card("ADE");
    // MDE = new Card("MDE");
    // VOL = new Card("VOL");
    // MDD = new Card("MDD");
    // ADD = new Card("ADD");
    // ME = new Card("ME");
    // MCE = new Card("MCE");
    // MC = new Card("MC");
    // MCD = new Card("MCD");
    // MD = new Card("MD");
    // MOE = new Card("MOE");
    // MO = new Card("MO");
    // MOD = new Card("MOD");
    // PLE = new Card("PLE");
    // PLD = new Card("PLD");
    // PL = new Card("PL");
  }

  putInFormation() {

    if(Iformation == db.formations.name){
      
      for (var i = 0; i < db.formations.lines; i++) {
        for (var j = 0; j < db.lines[i].length; j++) {
          const genCard = new Card(j)
          this.positions.push(genCard)
        }
      }
    }
  }
}



