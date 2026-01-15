import { CardAttributes } from "@/config/cardAttributes.js";
import * as db from "@/config/db.js";

export class Lineup {
  constructor(URLParam) {
    this.formation = URLParam;
    this.positions = [];
    this.genFormation();
  }

  genFormation() {

    const findFormation = db.formations.find(key => key.name == this.formation)
    const lines = findFormation.lines
    lines.forEach(position => {
      
      this.positions.push(position);
    });
  } 
}  
   