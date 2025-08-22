export let basics = {
    nome: db.names[Math.floor(Math.random() * db.names.length)],
    nation: db.nations[Math.floor(Math.random() * db.nations.length)],
    club: db.clubs[Math.floor(Math.random() * db.clubs.length)].club,

};

export let position;

export let stats = {
  desarm: [0,0],
  pass: [0,0],
  dribble: [0,0],
  shoot: [0,0],
  pace: [0,0],
  resistance: [0,0],
  impulse: [0,0],
  strength: [0,0],
  height: [0,0],
  weight: [0,0],
};

export class PickPlayer {
  constructor(player) {
    db.positions.forEach((obj) => {
      if (this.player == obj.position) {
        statsObject.pace = overNumber(
          obj.statsObject.pace[0],
          obj.statsObject.pace[1]
        );
      }
    });
  }
}
