import * as db from "/db.js";

let example = {
  desarm: "any",
  pass: "<60",
  dribble: ">60",
  shoot: "any",
};

let draft = false;

window.addEventListener("DOMContentLoaded", () => {
  draft = false;
});

const any = Math.floor(Math.random() * 99);

/* regra de negócio

    sortear informações para a carta
    mt
    clube = clubs[mt].club
    name = names[mt]
    nations = nations[mt]
    
    // physics and stats logic
    positions = ZG, LD, VOL, MC, MD, ME, MEI, SA, AT, PD, PE
    
    any = Math.floor(Math.random() * 99)
    
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

function overNumber(min, max) {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

function genStats(position) {
  let newPhysics = {
    pace: 99,
    resistance: 99,
    impulse: 99,
    strength: 99,
    height: 1.99,
    weight: 80,
  };

  let newStats = {
    desarm: 99,
    pass: 99,
    dribble: 99,
    shoot: 99,
  };

  
  switch (position) {
    case "ZG":
      stats.desarm = overNumber(60, 99);
      stats.pass = any;
      stats.dribble = overNumber(10, 60);
      stats.shoot = any;

      physics.pace = overNumber(10, 60);
      physics.resistance = overNumber(60, 99);
      physics.impulse = overNumber(60, 99);
      physics.strength = any;
      physics.height = overNumber(1.75, 2.0);
      physics.weight = any;
  }
}

genStats();

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
