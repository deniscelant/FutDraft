import * as db from "./db.js";

const levels = [
    {
        id: 1,
        step: "Oitavas de final",
    }
];

let genOpponent = db.clubs[Math.floor(Math.random() * db.clubs.length)].club;

function newMatch() {}

class SimMatch {
  constructor() {}
}