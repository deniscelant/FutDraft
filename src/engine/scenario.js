import { gameSave } from "./gameSaves"

export default class Scenario{
    constructor(step){
        this.scenarioTypes = [{
            1: "Choose Formation",
            2: "Draft",
            3: "Simulation",
        }]
    }

    renderScenario(){
        if(step == this.scenarioTypes[0]){
            
        }
    }
}