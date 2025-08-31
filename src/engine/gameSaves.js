export default class GameSaves {
  constructor() {
    this.step = 0;
    this.formation = "";
    this.lineup = {};
    this.gameSaves = [
      {
        draft: 1,
        date: "22/08/2025",
        step: 4,
        scenario: 3,
        formation: "433",
        lineup: {},
      },
    ];

    this.last = this.gameSaves.length - 1;
  }

  continueGame() {
    if (this.gameSaves.length == 1) {
      this.step = this.gameSaves.step;
      this.formation = this.gameSaves.formation;
      this.lineup = this.gameSaves.lineup;
    } else {
      this.step = this.gameSaves[this.last].step;
      this.formation = this.gameSaves[this.last].formation;
      this.lineup = this.gameSaves[this.last].lineup;
    }
  }

  newGame() {
    this.step = 0;
    this.formation = "";
    this.lineup = 0;
  }

  loadGame(selected) {
    if (selected == this.gameSaves.draft) {
      this.step = this.gameSaves.step;
      this.formation = this.gameSaves.formation;
      this.lineup = this.gameSaves.lineup;
    }
  }
}

export const gameSave = new GameSaves()