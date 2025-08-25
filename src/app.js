import * as lineup from "/src/components/lineup.js"
import {LineUp} from "/src/components/lineup.js"
import * as card from "/src/components/card.js"
import * as map from "/src/components/map.js"
import * as window from "/src/components/window.js"
import * as button from "/src/components/button.js"
import * as utils from "/src/utils/random.js" 

import * as chemistry from "/src/game/chemistry.js"
import * as db from "/src/game/db.js" 
import * as gameSaves from "/src/game/gameSaves.js"
import * as sim from "/src/game/sim.js"
import * as tactics from "/src/game/tactics.js"
 
const nlineup = new LineUp(utils.randomArrayIndex(db.clubs), utils.randomArrayIndex(db.tiers), utils.randomObjectIndex(db.formations, db.formations.name))
console.log(nlineup) 
 
 