import * as db from "/db.js";

// window.addEventListener("DOMContentLoaded", () => {
//   const playerPick = new PlayerPick();
//   playerPick.cap = true;
// });

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
        const cell = document.createElement("Button");
        const attackDiv = document.getElementById("attackDiv");
        const midDiv = document.getElementById("midDiv");
        const defDiv = document.getElementById("defDiv");
        const midDefDiv = document.getElementById("midDefDiv");

        cell.id = "cell";
        // document.body.appendChild(cell)

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
        // draft.styleFormation();
      }
    }
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

    const cardSlot = document.getElementById("cardSlot");
    cardSlot.appendChild(this.card);
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
  constructor() {
    const playerPickDiv = document.createElement("div");
    document.body.appendChild(playerPickDiv);
    // if(cap){
    //   switch (buttonText) {
    //     case "ZG":
    //       cardStats = Object.create(db.ZGPLUS);
    //       break;
    //     case "LDLE":
    //       cardStats = Object.create(db.LDLE);
    //       break;
    //     case "VOL":
    //       cardStats = Object.create(db.VOL);
    //       break;
    //     case "MC":
    //       cardStats = Object.create(db.MC);
    //       break;
    //     case "MEMD":
    //       cardStats = Object.create(db.MEMD);
    //       break;
    //     case "SAMEI":
    //       cardStats = Object.create(db.SAMEI);
    //       break;
    //     case "PEPD":
    //       cardStats = Object.create(db.PEPD);
    //       break;
    //     case "CA":
    //       cardStats = Object.create(db.CA);
    //       normalPick()
    //   }

    // }
    for (var i = 0; i < 5; i++) {
      const cardSlot = document.createElement("div");
      cardSlot.id = "cardSlot";
      playerPickDiv.appendChild(cardSlot);
      const player = new Player();
      player.renderCard();
    }
    this.cap = false;
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
        this.controller_playerPick();
      };
    });
  }

  // controller_cardCreation() {
  //   const buttons = document.querySelectorAll("button");
  //   buttons.forEach((button) => {
  //     button.onclick = () => {
  //       const buttonText = button.textContent;

  //       switch (buttonText) {
  //         case "ZG":
  //           cardStats = Object.create(db.ZG);
  //           break;
  //         case "LDLE":
  //           cardStats = Object.create(db.LDLE);
  //           break;
  //         case "VOL":
  //           cardStats = Object.create(db.VOL);
  //           break;
  //         case "MC":
  //           cardStats = Object.create(db.MC);
  //           break;
  //         case "MEMD":
  //           cardStats = Object.create(db.MEMD);
  //           break;
  //         case "SAMEI":
  //           cardStats = Object.create(db.SAMEI);
  //           break;
  //         case "PEPD":
  //           cardStats = Object.create(db.PEPD);
  //           break;
  //         case "CA":
  //           cardStats = Object.create(db.CA);
  //       }
  //       const player = new Player();
  //       player.renderCard();
  //     };
  //   });
  // }

  controller_playerPick() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.onclick = () => {
        let buttonText = button.textContent;
        switch (buttonText) {
          case "ZG":
            cardStats = Object.create(db.ZG);
            new PlayerPick();
            break;

          case "LD":
          case "LE":
            cardStats = Object.create(db.LDLE);
            new PlayerPick();
            break;

          case "VOL":
            cardStats = Object.create(db.VOL);
            new PlayerPick();
            break;

          case "MC":
            cardStats = Object.create(db.MC);
            new PlayerPick();
            break;

          case "ME":
          case "MD":
            cardStats = Object.create(db.MEMD);
            new PlayerPick();
            break;

          case "SA":
          case "MEI":
            cardStats = Object.create(db.SAMEI);
            new PlayerPick();
            break;

          case "PE":
          case "PD":
            cardStats = Object.create(db.PEPD);
            new PlayerPick();
            break;

          case "CA":
            cardStats = Object.create(db.CA);
            new PlayerPick();
            break;
        }
      };
    });
  }
}

init();
const eventController = new EventController();
eventController.controller_formations();
