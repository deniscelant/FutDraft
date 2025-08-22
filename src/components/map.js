import * as db from "./db.js";

export class Map {
  constructor(Iformation) {
    this.lines = db.formations[0].lines;

    this.GK = emptyCard;
    this.LE = emptyCard;
    this.ZGE = emptyCard;
    this.ZGC = emptyCard;
    this.ZGD = emptyCard;
    this.LD = emptyCard;
    this.ADE = emptyCard;
    this.MDE = emptyCard;
    this.VOL = emptyCard;
    this.MDD = emptyCard;
    this.ADD = emptyCard;
    this.ME = emptyCard;
    this.MCE = emptyCard;
    this.MC = emptyCard;
    this.MCD = emptyCard;
    this.MD = emptyCard;
    this.MOE = emptyCard;
    this.MO = emptyCard;
    this.MOD = emptyCard;
    this.PLE = emptyCard;
    this.PLD = emptyCard;
    this.PL = emptyCard;
  }
}

// new Map(IFormation)
// Map.GK = new Card("ZG");