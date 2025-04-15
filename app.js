import * as db from "/db.js";

const any = (array) => {
  Math.floor(Math.random() * array.length);
};

let draft = false;

window.addEventListener("DOMContentLoaded", () => {
  draft = false;
});

class Draft {
  constructor() {
    renderFormations();
    renderLineUp();
  }

  renderFormations() {
    const formationBoard = document.createElement("div");
    const formt = document.createElement("div");
    document.body.appendChild(formationBoard)
    formationBoard.appendChild(formt)

    formt.textContent = f.lines;

    //formation for f.lines
  }
}

class Player {
  constructor(position) {
    this.nome = db.names[any(db.names)];
    this.nation = db.nations[any(db.nations)];
    this.club = db.clubs[Math.floor(Math.random() * db.clubs.length)].club;
    this.cardStats = Object.create(db.position);
    this.card = document.createElement("div");
  }
  renderCard() {
    const picture = document.createElement("img");
    const info = document.createElement("div");
    const list = document.createElement("li");

    this.card.classList.add("card");
    this.card.appendChild(picture);
    this.card.appendChild(info);
    info.appendChild(list);
  }
}

class PlayerPick {
  constructor(players, cap) {
    players = this.players;
    cap = this.cap;
  }
}

function init() {
  if (!draft) {
    new Draft();
  } else {
    throw console.error("Não há drafts iniciados.");
  }
}
