import React from "react";
import { CardAttributes } from "@/config/cardAttributes";

export default function RenderCard() {
  const [stats, setStats] = useState({
    name: "",
    nation: "",
    club: "",
    position: "",
    pass: null,
    dribble: null,
    desarm: null,
    shoot: null,
    pace: null,
    resistance: null,
    impulse: null,
    strength: null,
  });
  setStats({
    name: "denis",
    nation: "",
    club: "",
    position: "",
    pass: null,
    dribble: null,
    desarm: null,
    shoot: null,
    pace: null,
    resistance: null,
    impulse: null,
    strength: null,
  });
  /*
   onclick = () => setStat({
    name: Card.name,
   })
  */

  function cardWindows() {
    for (var i = 0; i <= 5; i++) {
      <RenderCard></RenderCard>;
    }
  }
  return (
    <div id="card" onClick={this.cardClick}>
      {isEmpty}
      <div id="playerCore">
        <div className="playerInfo">
          <h1 id="name">{stat.name}</h1>
          <p>{stat.nation}</p>
          <p>{stat.club}</p>
          <p>{stat.position}</p>
        </div>
      </div>

      <div id="info">
        <div id="infoStats">
          <ul>
            <li>Pass</li>
            <li id="pass_stat">{stat.pass}</li>

            <li>Dribble</li>
            <li id="dribble_stat">{stat.dribble}</li>

            <li>Desarm</li>
            <li id="desarm_stat">{stat.desarm}</li>

            <li>Shoot</li>
            <li id="shoot_stat">{stat.shoot}</li>
          </ul>
        </div>

        <div id="infoPhysics">
          <ul>
            <li>Pace</li>
            <li id="pace_stat">{stat.pace}</li>

            <li>Resistance</li>
            <li id="resistance_stat">{stat.resistance}</li>

            <li>Impulse</li>
            <li id="impulse_stat">{stat.impulse}</li>

            <li>Strength</li>
            <li id="strength_stat">{stat.strength}</li>
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
