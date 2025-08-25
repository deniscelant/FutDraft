import * as db from "./db.js";

export class Map {
  constructor(Iformation) {
    this.lines = db.formations[0].lines;

    this.GK = db.empty;
    this.LE = db.empty;
    this.ZGE = db.empty;
    this.ZGC = db.empty;
    this.ZGD = db.empty;
    this.LD = db.empty;
    this.ADE = db.empty;
    this.MDE = db.empty;
    this.VOL = db.empty;
    this.MDD = db.empty;
    this.ADD = db.empty;
    this.ME = db.empty;
    this.MCE = db.empty;
    this.MC = db.empty;
    this.MCD = db.empty;
    this.MD = db.empty;
    this.MOE = db.empty;
    this.MO = db.empty;
    this.MOD = db.empty;
    this.PLE = db.empty;
    this.PLD = db.empty;
    this.PL = db.empty;
  }
}

// new Map(IFormation)
// Map.GK = new Card("ZG");