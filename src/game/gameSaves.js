class GameSaves {
  constructor() {
    this.step = 0;
    this.formation = "";
    this.lineup = {
      GK,
      LE,
      ZGE,
      ZGC,
      ZGD,
      LD,
      ADE,
      MDE,
      VOL,
      MDD,
      ADD,
      ME,
      MCE,
      MC,
      MCD,
      MD,
      MOE,
      MO,
      MOD,
      PLE,
      PLD,
      PL,
    };
  }

  continueGame() {
    this.step = lastDraft.step;
    this.formation = lastDraft.formation;
    this.lineup = lastDraft.lineup; 
  }

  newGame() {
    this.step = 0;
    this.formation = "";
    this.lineup = 0; 
  }

  loadGame(selected) {
    if(selected == gameSaves.draft){
      
      this.step = gameSaves.step;
      this.formation = gameSaves.formation;
      this.lineup = gameSaves.lineup; 
    }
  }
}

let gameSaves = [
  {
    draft: 1,
    date: "22/08/2025",
    step: 4,
    formation: "433",
    lineup: {},
  },
];

let lastDraft = gameSaves[gameSaves.length - 1];
