import * as db from "./db"

let draft = false;

window.addEventListener("DOMContentLoaded", () => {
    draft = false;
})


class Draft{
    constructor(){
        renderFormations();
        renderLineUp();
    }
}

class Player{
    constructor(name, nation, club, league, physics, stats){
        name = this.name;
        nation = this.nation;
        club = this.club;
        league = this.league;
        physics = this.physics;
        stats = this.stats;
    }
}


class PlayerPick{
    constructor(players, cap){
        players = this.players;
        cap = this.cap;
    }
}

function Main(){
    if(!draft){
        new Draft();
    } else{
        throw console.error("Não há drafts iniciados.");
        
    }
}

