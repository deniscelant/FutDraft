import * as db from "/db.js";

let cardStats = {};

const button = document.getElementById("btn");
button.onclick = () => {
  const buttonText = button.textContent;

  switch (buttonText) {
    case "ZG":
      cardStats = Object.create(db.ZG);
      break;
    case "LDLE":
      cardStats = Object.create(db.LDLE);
      break;
    case "VOL":
      cardStats = Object.create(db.VOL);
      break;
    case "MC":
      cardStats = Object.create(db.MC);
      break;
    case "MEMD":
      cardStats = Object.create(db.MEMD);
      break;
    case "SAMEI":
      cardStats = Object.create(db.SAMEI);
      break;
    case "PEPD":
      cardStats = Object.create(db.PEPD);
      break;
    case "CA":
      cardStats = Object.create(db.CA);
  }
  const player = new Player();
  player.renderCard();
};
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
    document.body.appendChild(formationBoard);
    formationBoard.appendChild(formt);

    formt.textContent = f.lines;

    //formation for f.lines
  }
}

class Player {
  constructor() {
    this.nome = db.names[Math.floor(Math.random() * db.names.length)];
    this.nation = db.nations[Math.floor(Math.random() * db.nations.length)];
    this.club = db.clubs[Math.floor(Math.random() * db.clubs.length)].club;
    this.posDB = cardStats;
    this.card = document.createElement("div");
    this.card.id = "card";

    this.cardContent = document.createElement("div");
    this.cardContent.id = "cardContent";

    document.body.appendChild(this.card);
    this.card.appendChild(this.cardContent);
  }

  renderCard() {
    this.cardContent.innerHTML = `
    <div id ="playerCore">
        <p class="playerInfo">${this.nome}</p>
        <p class="playerInfo">${this.nation}</p>
        <p class="playerInfo">${this.club}</p>
    </div>
      <div id="info">
        <div id="infoStats">
            <ul>
              <li>Pass</li>
              <li id="pass_stat">${cardStats.pass}</li>
              <li>Dribble</li>
              <li id="dribble_stat">${cardStats.dribble}</li>
              <li>Desarm</li>
              <li id="desarm_stat">${cardStats.desarm}</li>
              <li>Shoot</li>
              <li id="shoot_stat">${cardStats.shoot}</li>
            </ul>
          </div>

          <div id="infoPhysics">
            <ul>
              <li>Pace</li>
              <li id="pace_stat">${cardStats.pace}</li>
              <li>Resistance</li>
              <li id="resistance_stat">${cardStats.resistance}</li>
              <li>Impulse</li>
              <li id="impulse_stat">${cardStats.impulse}</li>
              <li>Strength</li>
              <li id="strength_stat">${cardStats.strength}</li>
            </ul>
          </div>
          
      </div>

    `;
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
