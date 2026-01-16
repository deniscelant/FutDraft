import React from "react";
import { CardAttributes } from "@/config/cardAttributes";
import { useState } from "react";

export default function RenderCard({ stats={}, click }) {
  return (
    <div className={stats.position} id="card" onClick={click}>
      <div id="playerCore">
        <div className="playerInfo">
          <h1 id="name">{stats.name}</h1>
          <p>{stats.nation}</p>
          <p>{stats.club}</p>
          <p>{stats.position}</p>
        </div>
      </div>

      <div id="info">
        <div id="infoStats">
          <ul>
            <li>Pass</li>
            <li id="pass_stat">{stats.pass}</li>

            <li>Dribble</li>
            <li id="dribble_stat">{stats.dribble}</li>

            <li>Desarm</li>
            <li id="desarm_stat">{stats.desarm}</li>

            <li>Shoot</li>
            <li id="shoot_stat">{stats.shoot}</li>
          </ul>
        </div>

        <div id="infoPhysics">
          <ul>
            <li>Pace</li>
            <li id="pace_stat">{stats.pace}</li>

            <li>Resistance</li>
            <li id="resistance_stat">{stats.resistance}</li>

            <li>Impulse</li>
            <li id="impulse_stat">{stats.impulse}</li>

            <li>Strength</li>
            <li id="strength_stat">{stats.strength}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// state = {
//   name: "",
//   nation: "",
//   club: "",
//   position: "",
//   pass: null,
//   dribble: null,
//   desarm: null,
//   shoot: null,
//   pace: null,
//   resistance: null,
//   impulse: null,
//   strength: null,
// };
