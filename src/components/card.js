// dentro de src/components/card.js
import * as db from "../game/db.js";


export function overNumber(min, max) {
  let minNumber = Math.ceil(min);
  let maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

export class Card {
  constructor(position) {
    this.position = position;
    this.name = db.names[Math.floor(Math.random() * db.names.length)];
    this.nation = db.nations[Math.floor(Math.random() * db.nations.length)];
    this.club = db.clubs[Math.floor(Math.random() * db.clubs.length)].club;

    db.positions.forEach((obj) => {
      if (this.position == obj.position) {
        this.desarm = overNumber(obj.desarm[0], obj.desarm[1]);
        this.pass = overNumber(obj.pass[0], obj.pass[1]);
        this.dribble = overNumber(obj.dribble[0], obj.dribble[1]);
        this.shoot = overNumber(obj.shoot[0], obj.shoot[1]);
        this.pace = overNumber(obj.pace[0], obj.pace[1]);
        this.resistance = overNumber(obj.resistance[0], obj.resistance[1]);
        this.impulse = overNumber(obj.impulse[0], obj.impulse[1]);
        this.strength = overNumber(obj.strength[0], obj.strength[1]);
        this.height = overNumber(obj.height[0], obj.height[1]);
        this.weight = overNumber(obj.weight[0], obj.weight[1]);
      }
    });

  }
}

// let cards = []
// const card = new Card("ZG")
// cards.push(card) 
// console.log(cards)             