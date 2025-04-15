import * as db from "./db";

let draft = false;

window.addEventListener("DOMContentLoaded", () => {
  draft = false;
});

/* regra de negócio

    sortear informações para a carta
    mt
    clube = clubs[mt].club
    name = names[mt]
    nations = nations[mt]
    
    // physics and stats logic
    positions = ZG, LD, VOL, MC, MD, ME, MEI, SA, AT, PD, PE
    
    any = Math.floor(Math.random() * 99)
    under60 = Math.floor(Math.random() * (60 - 10))
    over60 = Math.floor(Math.random() * (99 - 60))

    
    var phys = [
        {   
            pace: physics.pace,
            resistance: 99,
            impulse: 99,
            strength: 99,
            height: 1.99,
            weight: 80,
        }
    ]

*/

console.log(Math.floor(Math.random() * 99))
   
class Draft {
  constructor() {
    renderFormations();
    renderLineUp();
  } 
 
  renderFormations() {
    const formationBoard = document.createElement("div");
    db.formations.forEach((f) => {
      const formt = document.createElement("div");
      formt.textContent = f.lines;
    });
  }
}

class Player {
  constructor(name, nation, club, league, physics, stats) {
    name = this.name;
    nation = this.nation;
    club = this.club;
    league = this.league;
    physics = this.physics;
    stats = this.stats;
  }
}

class PlayerPick {
  constructor(players, cap) {
    players = this.players;
    cap = this.cap;
  }
}

function Main() {
  if (!draft) {
    new Draft();
  } else {
    throw console.error("Não há drafts iniciados.");
  }
}

class RenderCards {
  constructor() {
    const card = document.createElement("div");
    const picture = document.createElement("img");
    const info = document.createElement("div");
    const list = document.createElement("li");

    card.classList.add("card");
    card.appendChild(picture);
    card.appendChild(info);
    info.appendChild(list);
  }
}
