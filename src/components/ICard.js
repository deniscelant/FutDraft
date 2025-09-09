export default function ICard(Icard) {
  return (
    <div id="card">
      <div id="playerCore">
        <div className="playerInfo">
          <h1 id="playerName">{Icard.name}</h1>
          <p>{Icard.nation}</p>
          <p>{Icard.club}</p>
        </div>
      </div>
      <div id="info">
        <div id="infoStats">
          <ul>
            <li>Pass</li>
            <li id="pass_stat">{Icard.pass}</li>
            <li>Dribble</li>
            <li id="dribble_stat">{Icard.dribble}</li>
            <li>Desarm</li>
            <li id="desarm_stat">{Icard.desarm}</li>
            <li>Shoot</li>
            <li id="shoot_stat">{Icard.shoot}</li>
          </ul>
        </div>

        <div id="infoPhysics">
          <ul>
            <li>Pace</li>
            <li id="pace_stat">{Icard.pace}</li>
            <li>Resistance</li>
            <li id="resistance_stat">{Icard.resistance}</li>
            <li>Impulse</li>
            <li id="impulse_stat">{Icard.impulse}</li>
            <li>Strength</li>
            <li id="strength_stat">{Icard.strength}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
