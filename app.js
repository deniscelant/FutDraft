const LineUp = {
  positionGK: Card,
  positionZG: Card,
};

const infoObject = {
  name: string,
  club: string,
};

const statsObject = {
  pace: number,
  shoot: number,
};

class PickPlayer {
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

class Card {
  constructor(info, stats) {}

  renderCard() {
    h1.textContent = info;
    p.textContent = stats;
  }
}
