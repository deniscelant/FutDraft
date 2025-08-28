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
        formation: "433",
        lineup: {},
      },
    ];
    
    this.lastDraft = this.gameSaves[this.gameSaves.length - 1];
  }

  static continueGame() {
    this.step = this.lastDraft.step;
    this.formation = this.lastDraft.formation;
    this.lineup = this.lastDraft.lineup; 
  }

  static newGame() {
    this.step = 0;
    this.formation = "";
    this.lineup = 0; 
  }

  static loadGame(selected) {
    if(selected == this.gameSaves.draft){
      
      this.step = this.gameSaves.step;
      this.formation = this.gameSaves.formation;
      this.lineup = this.gameSaves.lineup; 
    }
  }
}


