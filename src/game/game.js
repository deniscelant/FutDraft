class DraftRegistry {
  constructor(step, formation, lineup) {
    this.step = step;
    this.formation = formation;
    this.lineup = lineup;
  }
}

class NewGame {
  constructor() {

    const reg = new DraftRegistry(0, "", ) 
    this.chooseFormation();
  }
}

class LoadGame {
  constructor(slot) {
    if (slot == DraftHistory.draft) {
      this.draftRegistry = [
        {
          draft,
        },
      ];
    }
  }
}
let draftHistory = [
  {
    draft: 1,
    date: "22/08/2025",
    step: 4,
    formation: "433",
    lineup: [],
  },
];
let lastDraft = draftHistory[DraftHistory.length - 1];
