import * as db from "/db.js";

let cardStats = {};
let isDraft = false;
let lines = db.formations[0].lines;

class Draft {
  constructor() {
    this.pickFormations();
    this.Events();
  }

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
    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        const cell = document.createElement("Button");
        const attackDiv = document.getElementById("attackDiv");
        const midDiv = document.getElementById("midDiv");
        const defDiv = document.getElementById("defDiv");
        const midDefDiv = document.getElementById("midDefDiv");

        cell.id = "cell";

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
          case "MC":
          case "SA":
          case "MEI":
            cell.classList.add("mid");
            midDiv.appendChild(cell);
            break;
          case "MD":
            cell.classList.add("mid");
            midDefDiv.appendChild(cell);

          case "LE":
          case "ZG":
          case "LD":
            cell.classList.add("def");
            defDiv.appendChild(cell);
            break;
        }
      }
    }
  }

  removePickFormations() {
    const formationBoard = document.querySelectorAll(".board");
    formationBoard.forEach((frm) => {
      frm.remove();
    });
  }

  Events() {
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
      div.onclick = () => {
        switch (div.id) {
          case "433":
            lines = db.formations[0].lines;
            this.drawPositions();
            break;
          case "442":
            lines = db.formations[1].lines;
            this.drawPositions();

            break;
          case "4231":
            lines = db.formations[2].lines;
            this.drawPositions();

            break;
          case "532":
            lines = db.formations[3].lines;
            this.drawPositions();

            break;
        }
        this.removePickFormations();
      };
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.onclick = () => {
        let buttonText = button.textContent;
        switch (buttonText) {
          case "ZG":
            cardStats = Object.create(db.ZG);
            new Player();
            break;

          case "LD":
          case "LE":
            cardStats = Object.create(db.LDLE);
            new Player();
            break;

          case "VOL":
            cardStats = Object.create(db.VOL);
            new Player();
            break;

          case "MC":
            cardStats = Object.create(db.MC);
            new Player();
            break;

          case "ME":
          case "MD":
            cardStats = Object.create(db.MEMD);
            new Player();
            break;

          case "SA":
          case "MEI":
            cardStats = Object.create(db.SAMEI);
            new Player();
            break;

          case "PE":
          case "PD":
            cardStats = Object.create(db.PEPD);
            new Player();
            break;

          case "CA":
            cardStats = Object.create(db.CA);
            new Player();
            break;
        }
      };
    });
  }
}

class Player {
  constructor() {
    this.nome = db.names[Math.floor(Math.random() * db.names.length)];
    this.nation = db.nations[Math.floor(Math.random() * db.nations.length)];
    this.club = db.clubs[Math.floor(Math.random() * db.clubs.length)].club;
    this.posDB = cardStats;

    this.Events();
    this.PlayerPick();
  }

  renderCard() {
    return `
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

  PlayerPick() {
    const playersWindow = document.createElement("div");
    document.body.appendChild(playersWindow);
    for (var i = 0; i < 5; i++) {
      const cardSlot = document.createElement("div");
      cardSlot.id = "cardSlot";
      cardSlot.innerHTML = this.renderCard();
      playersWindow.appendChild(cardSlot);
    }
  }

}

new Draft();
