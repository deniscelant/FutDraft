import * as db from "/src/game/db.js";

export class ChemistryLine {
  constructor(IClub, ILeague, INation) {
    this.club = IClub;
    this.league = ILeague;
    this.nation = INation;
    this.chemistryStrong = 0;
    this.isSame();
  }
  isSame() {
    if (db.clubs.find((c) => c.club == this.club)) this.chemistryStrong++;
    if (db.clubs.find((l) => l.league == this.league)) this.chemistryStrong++;
    if (db.nations.find((n) => n == this.nation)) this.chemistryStrong++;
  }
}
