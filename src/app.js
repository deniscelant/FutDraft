import * as lineup from "/src/components/lineup.js"
import {LineUp} from "/src/components/lineup.js"
import * as card from "/src/components/card.js"
import {Card} from "/src/components/card.js"
import * as window from "/src/components/window.js"
import * as button from "/src/components/button.js"
import * as utils from "/src/utils/random.js" 

import * as chemistry from "/src/game/chemistry.js"
import * as db from "/src/game/db.js" 
import * as gameSaves from "/src/game/gameSaves.js"
import * as sim from "/src/game/sim.js"
import * as tactics from "/src/game/tactics.js"
import { randomArrayIndex } from "./utils/random.js"
 
const formationValues = Object.values(db.formations) 
const formationLines = formationValues[Math.floor(Math.random() * formationValues.length)].name  //433 ou 422

const randomlineup = new LineUp(utils.randomArrayIndex(db.clubs), formationLines) 

    