import ChooseFormation from "@/app/choose-formation/page"
import { gameSave } from "./gameSaves"
import Link from "next/link";

export default class Scenario{
    constructor(scenario){
        this.scenario = scenario;
        this.scenarioTypes = [{
            1: "ChooseFormation",
            2: "SquadBuilder",
            3: "Championship",
        }]
        this.renderScenario()
    }

    renderScenario(){
        if(scenario == this.scenarioTypes[0]){
             return <Link href="/choose-formation"></Link>
        }
        if(scenario == this.scenarioTypes[1]){
             return <Link href="/squad-builder"></Link>
        }
        if(scenario == this.scenarioTypes[3]){
             return <Link href="/championship"></Link>

        }
    }
}