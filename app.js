import * as db from "/db.js";

let cardStats = {};
let isDraft = false;
let lines = db.formations[0].lines;

class Draft {
  constructor() {}

  pickFormations() {
    db.formations.forEach((formation) => {
      const formationBoard = document.createElement("div");
      formationBoard.classList.add("board");
      document.body.appendChild(formationBoard);

      formationBoard.innerHTML = `
        <div id="${formation.name}" class="formDiv">
          <h1 id="formTittle">${formation.name}</h1>
          <img id="formImage" src=${formation.img} alt="">
        </div>
      `;
    });
  }

  drawPositions() {
    const draft = new Draft();

    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        const LineUp = document.querySelector(".LineUp")
        const cell = document.createElement("Button");
        const attackDiv = document.createElement("div");
        const midDiv = document.createElement("div");
        const defDiv = document.createElement("div");

        cell.id = "cell";
        // document.body.appendChild(cell)
        
        LineUp.appendChild(attackDiv)
        LineUp.appendChild(midDiv)
        LineUp.appendChild(defDiv)
        let itName = lines[i][j];
        cell.textContent = itName;
        cell.id = itName;
        switch (cell.id) {
          case "PE":
          case "CA":
          case "PD":
            attackDiv.appendChild(cell);
            cell.classList.add("attack");
            break;
          case "ME":
          case "MD":
          case "MC":
          case "SA":
          case "MEI":
            cell.classList.add("mid");
            midDiv.appendChild(cell);
            break;
          case "LE":
          case "ZG":
          case "LD":
            cell.classList.add("def");
            defDiv.appendChild(cell);
            break;
        }
        // draft.styleFormation();
      }
    }
  }

  // styleFormation() {
  //   const cell = document.querySelectorAll(".cell");
  //   cell.forEach((c) => {
  //     switch (c.id) {
  //       case "PE":
  //         c.classList.add("attack");
  //         break;
  //       case "CA":
  //         c.classList.add("attack");
  //         break;
  //       case "PD":
  //         c.classList.add("attack");
  //         break;
  //       case "ME":
  //         c.classList.add("mid");
  //         break;
  //       case "MD":
  //         c.classList.add("mid");
  //         break;
  //       case "MC":
  //         c.classList.add("mid");
  //         break;
  //       case "SA":
  //         c.classList.add("mid");
  //         break;
  //       case "MEI":
  //         c.classList.add("mid");
  //         break;
  //       case "LE":
  //         c.classList.add("def");
  //         break;
  //       case "ZG":
  //         c.classList.add("def");
  //         break;
  //       case "LD":
  //         c.classList.add("def");
  //         break;
  //     }
  //   });
  // }

  renderLineUp() {
    button.onclick = () => {
      const buttonText = button.textContent;

      for (var formation of db.formations) {
        for (var line of formation) {
          const cell = document.createElement("Button");
          const board = document.getElementById("board");
          board.appendChild(cell);
        }
      }
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
  }
  removePickFormations() {
    const formationBoard = document.querySelectorAll(".board");
    formationBoard.forEach((frm) => {
      frm.remove();
    });
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
        <div class="playerInfo">
          <h1>${this.nome}</h1>
          <p>${this.nation}</p>
          <p>${this.club}</p>
        </div>
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
  const draft = new Draft();
  draft.pickFormations();
}

class EventController {
  constructor() {}

  controller_formations() {
    const draft = new Draft();

    const divs = document.querySelectorAll("div");
    const formationBoard = document.getElementById("board");
    divs.forEach((div) => {
      div.onclick = () => {
        switch (div.id) {
          case "433":
            lines = db.formations[0].lines;
            draft.drawPositions();
            break;
          case "442":
            lines = db.formations[1].lines;
            draft.drawPositions();

            break;
          case "4231":
            lines = db.formations[2].lines;
            draft.drawPositions();

            break;
          case "532":
            lines = db.formations[3].lines;
            draft.drawPositions();

            break;
        }
        draft.removePickFormations();
      };
    });
  }
}

init();
const eventController = new EventController();
eventController.controller_formations();
