import { Card } from "/src/components/card.js";
import * as db from "/src/game/db.js";

export class LineUp {
  constructor(club, Iformation) {
    this.club = club;
    this.Iformation = Iformation;
    this.positions = [];
    this.genFormation();
  }

  genFormation() {

    const findFormation = db.formations.find(key => key.name == this.Iformation)
    const lines = findFormation.lines
    lines.forEach(position => {
      
      const genCard = new Card(position);
      this.positions.push(genCard);
    });
  } 
}  
   
 