import * as db from "./db.js";

const attackDiv = document.getElementById("attackDiv");
const midDiv = document.getElementById("midDiv");
const defDiv = document.getElementById("defDiv");
const midDefDiv = document.getElementById("midDefDiv");

let playerPosition = "";
let lines = db.formations[0].lines;

class Draft {
  constructor() {
    this.initFormations();
  }

  initFormations() {
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

  static drawPositions() {
    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        const cell = document.createElement("Button");

        cell.id = "cell";

        let itName = lines[i][j];
        cell.textContent = itName;
        cell.id = itName;
        switch (cell.id) {
          case "PE":
          case "CA":
          case "PD":
            attackDiv.appendChild(cell);
            cell.classList.add("positionButton");
            break;
          case "ME":
          case "MC":
          case "SA":
          case "MEI":
            cell.classList.add("positionButton");
            midDiv.appendChild(cell);
            break;
          case "MD":
            cell.classList.add("positionButton");
            midDefDiv.appendChild(cell);

          case "LE":
          case "ZG":
          case "LD":
            cell.classList.add("positionButton");
            defDiv.appendChild(cell);
            break;
        }
      }
    }
  }

  static removeinitFormations() {
    const formationBoard = document.querySelectorAll(".board");
    formationBoard.forEach((frm) => {
      frm.remove();
    });
  }

}

class Player {
  constructor(position) {
    this.position = position;
    this.nome = db.names[Math.floor(Math.random() * db.names.length)];
    this.nation = db.nations[Math.floor(Math.random() * db.nations.length)];
    this.club = db.clubs[Math.floor(Math.random() * db.clubs.length)].club;
    let findstat = db.positions.find((pos) => pos.position == this.position);
    this.desarm = findstat;

    db.positions.forEach((obj) => {
      if (this.position == obj.position) {
        this.desarm = overNumber(obj.desarm[0], obj.desarm[1]);
        this.pass = overNumber(obj.pass[0], obj.pass[1]);
        this.dribble = overNumber(obj.dribble[0], obj.dribble[1]);
        this.shoot = overNumber(obj.shoot[0], obj.shoot[1]);
        this.pace = overNumber(obj.pace[0], obj.pace[1]);
        this.resistance = overNumber(obj.resistance[0], obj.resistance[1]);
        this.impulse = overNumber(obj.impulse[0], obj.impulse[1]);
        this.strength = overNumber(obj.strength[0], obj.strength[1]);
        this.height = overNumber(obj.height[0], obj.height[1]);
        this.weight = overNumber(obj.weight[0], obj.weight[1]);
      }
    });

    this.registryCard = {
      position: this.position,
      desarm: this.desarm,
      pass: this.pass,
      dribble: this.dribble,
      shoot: this.shoot,
      pace: this.pace,
      resistance: this.resistance,
      impulse: this.impulse,
      strength: this.strength,
      height: this.height,
      weight: this.weight,
    };

    db.cardDB.push(this.registryCard)
    
    this.cardHTML = `
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
              <li id="pass_stat">${this.pass}</li>
              <li>Dribble</li>
              <li id="dribble_stat">${this.dribble}</li>
              <li>Desarm</li>
              <li id="desarm_stat">${this.desarm}</li>
              <li>Shoot</li>
              <li id="shoot_stat">${this.shoot}</li>
            </ul>
          </div>

          <div id="infoPhysics">
            <ul>
              <li>Pace</li>
              <li id="pace_stat">${this.pace}</li>
              <li>Resistance</li>
              <li id="resistance_stat">${this.resistance}</li>
              <li>Impulse</li>
              <li id="impulse_stat">${this.impulse}</li>
              <li>Strength</li>
              <li id="strength_stat">${this.strength}</li>
            </ul>
          </div>
          
      </div>
 
    `;

    const cardSlot = document.createElement("div");
    cardSlot.classList.add("cardSlot");
    cardSlot.innerHTML = this.cardHTML;

    const card = document.createElement("div");
    card.id = "card";

    card.onclick = () =>{
      db.lineUpDB.push(card)
    }

    const cardBox = document.getElementById("cardBox")
    cardBox.appendChild(card);
    card.appendChild(cardSlot);
  }
}

function overNumber(min, max) {
  let minNumber = Math.ceil(min);
  let maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

function RenderPlayerWindow() {
  for (var i = 0; i < 5; i++) {
    new Player(playerPosition);
  }
}

function events() {
  document.body.onclick = (element) => {
    playerPosition = element.target.textContent;
    let activeButton
    if (element.target.nodeName == "BUTTON") {
      RenderPlayerWindow();
      activeButton = element.target.textContent;
    }
    if (element.target.id == "card" && activeButton == ) {
      
    }
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
      div.onclick = () => {
        switch (div.id) {
          case "433":
            lines = db.formations[0].lines;
            Draft.drawPositions();
            break;
          case "442":
            lines = db.formations[1].lines;
            Draft.drawPositions();

            break;
          case "4231":
            lines = db.formations[2].lines;
            Draft.drawPositions();

            break;
          case "532":
            lines = db.formations[3].lines;
            Draft.drawPositions();

            break;
        }
        Draft.removeinitFormations();
      };
    });
  };
}

new Draft();
events();