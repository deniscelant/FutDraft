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
    this.card = document.createElement("img");
    document.body.appendChild(card)
  }
  renderCard() {
    const info = document.createElement("div")
    this.card.appendChild(info)
    info.innerHTML = `
      <div id="cardStats">
          <ul>
            <li>Pass</li>
            <li id="pass_stat">${this.name}</li>
            <li>Dribble</li>
            <li id="dribble_stat">${this.name}</li>
            <li>Desarm</li>
            <li id="desarm_stat">99</li>
            <li>Shoot</li>
            <li id="shoot_stat">99</li>
          </ul>
        </div>

        <div id="cardPhysics">
          <ul>
            <li>Pace</li>
            <li id="pace_stat">99</li>
            <li>Resistance</li>
            <li id="resistance_stat"> 99</li>
            <li>Impulse</li>
            <li id="impulse_stat">99</li>
            <li>Strength</li>
            <li id="strength_stat">99</li>
          </ul>
        </div>
    `

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

