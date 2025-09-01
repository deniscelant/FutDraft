import renderScenario from "./scenario";
import Scenario from "./scenario";

export default class GameSaves {
  constructor(step, formation, scenario, lineup) {
    this.step = step;
    this.formation = formation;
    this.scenario = scenario;
    this.lineup = lineup;
  }

  static continueGame() {
    return new GameSaves(
      gameSaves[this.last].step, 

    )
    this.step = this.gameSaves[this.last].step;
    this.scenario = this.gameSaves[this.last].scenario;
    this.formation = this.gameSaves[this.last].formation;
    this.lineup = this.gameSaves[this.last].lineup;
    renderScenario(this.scenario);
  }

  newGame() {
    this.step = 0;
    this.formation = "";
    this.scenario = "ChooseFormation";
    this.lineup = 0;
    renderScenario(this.scenario);
    console.log("Novo jogo");
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

let gameSaves = [
  {
    draft: 1,
    date: "22/08/2025",
    step: 4,
    scenario: "ChooseFormation",
    formation: "433",
    lineup: {},
  },
];

const last = this.gameSaves.length - 1;


export const gameSave = new GameSaves();
