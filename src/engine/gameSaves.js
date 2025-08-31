import renderScenario from "./scenario";
import Scenario from "./scenario";

export default class GameSaves {
  constructor() {
    this.step = 0;
    this.formation = "";
    this.scenario = "";
    this.lineup = {};
    this.gameSaves = [
      {
        draft: 1,
        date: "22/08/2025",
        step: 4,
        scenario: "ChooseFormation",
        formation: "433",
        lineup: {},
      },
    ];

    this.last = this.gameSaves.length - 1;
  }

  continueGame() {
    if (this.gameSaves.length == 1) {
      this.step = this.gameSaves.step;
      this.scenario = this.gameSaves.scenario;
      this.formation = this.gameSaves.formation;
      this.lineup = this.gameSaves.lineup;
      renderScenario(this.scenario);
    } else {
      this.step = this.gameSaves[this.last].step;
      this.scenario = this.gameSaves[this.last].scenario;
      this.formation = this.gameSaves[this.last].formation;
      this.lineup = this.gameSaves[this.last].lineup;
      renderScenario(this.scenario);
    }
  }

  newGame() {
    this.step = 0;
    this.formation = "";
    this.scenario = "ChooseFormation";
    this.lineup = 0;
    renderScenario(this.scenario);
  }

  loadGame(selected) {
    if (selected == this.gameSaves.draft) {
      this.step = this.gameSaves.step;
      this.formation = this.gameSaves.formation;
      this.lineup = this.gameSaves.lineup;
      renderScenario(this.scenario);
    }
  }
}

export const gameSave = new GameSaves();
